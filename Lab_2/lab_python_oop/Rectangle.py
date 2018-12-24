from .GeometricFrigure import *
from .ColorFigure import *
class Rectange(GeometricFigure):
    def __init__(self, width, lenght, color):
        self.width = width
        self.lenght = lenght
        self.color = ColorFigure(color)

    name = 'Прямоугольник'
    def reName(self):
        return self.name
    def SquareOfFigure(self):
        return self.width * self.lenght
    def __repr__(self):
        return 'Имя = {}, Ширина = {}, Длина = {}, Цвет = {}, Площадь = {}'.format(self.reName(),self.width, self.lenght, self.color.color, self.SquareOfFigure())