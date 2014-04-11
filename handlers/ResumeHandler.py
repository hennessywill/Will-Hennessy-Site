import MainHandler


class ResumeHandler(MainHandler.Handler):
    """ Handler for the resume page """

    def get(self):
        self.render("resume.html")