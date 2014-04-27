from webapp2_extras.routes import RedirectRoute

from ErrorHandlers import handle_401, handle_404, handle_500, Error401Handler, Error404Handler, Error500Handler
from IndexHandler import IndexHandler
from AboutMeHandler import AboutMeHandler
from ResumeHandler import ResumeHandler
from ProjectsHandler import ProjectsHandler
from FacebookHandler import FacebookHandler
from CoursesHandler import CoursesHandler

""" A mapping of all the site URL's to the Python page handlers """

handlers = [
    RedirectRoute('/', handler=IndexHandler, name='Index', strict_slash=True),
    RedirectRoute('/aboutme', handler=AboutMeHandler, name='AboutMe', strict_slash=True),
    RedirectRoute('/resume', handler=ResumeHandler, name='Resume', strict_slash=True),
    RedirectRoute('/projects', handler=ProjectsHandler, name='Project', strict_slash=True),
    RedirectRoute('/facebook', handler=FacebookHandler, name='Facebook', strict_slash=True),
    RedirectRoute('/courses', handler=CoursesHandler, name='Courses', strict_slash=True),


    RedirectRoute('/401', handler=Error401Handler, name='Error401', strict_slash=True),
    RedirectRoute('/404', handler=Error404Handler, name='Error404', strict_slash=True),
    RedirectRoute('/500', handler=Error500Handler, name='Error500', strict_slash=True),
]

errorHandlers = {
    401: handle_401,
    404: handle_404,
    500: handle_500,
}