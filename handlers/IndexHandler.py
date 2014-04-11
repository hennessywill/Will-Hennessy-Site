import MainHandler


class IndexHandler(MainHandler.Handler):
    """ Handler for the home page """
    
    def get(self):
        self.render("index.html")