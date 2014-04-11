import MainHandler


class ProjectsHandler(MainHandler.Handler):
    """ Handler for the Projects page """

    def get(self):
        self.render("projects.html")