import MainHandler


class CoursesHandler(MainHandler.Handler):
    """ Handler for the home page """
    
    def get(self):
        self.render("courses.html")