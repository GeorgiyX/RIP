from .Rectangle import *
class Square(Rectange):
    def __init__(self, width, color):
        Rectange.__init__(self, width, width, color)
    name = "Квадрат"
    def __repr__(self):
        return 'Имя = {}, Ширина = {}, Цвет = {}, Площадь = {}'.format(self.reName(), self.width, self.color.color, self.SquareOfFigure())