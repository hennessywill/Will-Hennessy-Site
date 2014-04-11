import MainHandler


class AboutMeHandler(MainHandler.Handler):
    """ Handler for the About Me page """

    def get(self):
        self.render("aboutme.html")