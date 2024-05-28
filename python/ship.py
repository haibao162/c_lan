import pygame as  py
class ships():
    # ship=ships(screen)，所以init方法加上第二个参数
    def __init__(self, screen):
        self.screen=screen
        # 使用本地images文件夹下图片
        self.image=py.image.load(('images/ship.png'))
        self.rect=self.image.get_rect() # 返回(200, 200)的格式
        # self.scree_rect=self.image.get_rect()

        # self.rect.conterx=self.scree_rect.centerx
        # self.rect.bottom=self.screen_rect.bottom
    def blitme(self):
        self.screen.blit(self.image,self.rect)