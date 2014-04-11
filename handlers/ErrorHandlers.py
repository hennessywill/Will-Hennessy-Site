import MainHandler
import logging
import jinja2
from google.appengine.api import users

# https://webapp-improved.appspot.com/guide/exceptions.html#guide-exceptions

def render(response, template, **kw):
	t = MainHandler.jinja_env.get_template(template)
	page = t.render(**kw)
	response.out.write(page)


def handle_401(request, response, exception):
	# Unauthorized
	logging.exception(exception)
	render( response, "simple_message.html", header="ACCESS DENIED",
			message="You are not authorized to view this page." )
	response.set_status(401)


def handle_404(request, response, exception):
	# Not Found
	logging.exception(exception)
	render( response, "simple_message.html", header="PAGE NOT FOUND",
			message="Sorry, that page does not exist." )
	response.set_status(404)


def handle_500(request, response, exception):
	# Internal Server Error
	logging.exception(exception)
	render( response, "simple_message.html", header="A server error occurred!",
			message="Oops! An internal server error occured." )
	response.set_status(500)


class Error401Handler(MainHandler.Handler):
	def get(self):
		return self.abort(401)

class Error404Handler(MainHandler.Handler):
	def get(self):
		return self.abort(404)

class Error500Handler(MainHandler.Handler):
	def get(self):
		return self.abort(500)
