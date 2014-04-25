import MainHandler


class FacebookHandler(MainHandler.Handler):
    """ Handler for the facebook page """
    
    def get(self):
        self.render("facebook.html")