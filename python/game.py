import sys
import pygame as py
from setting import settings
from ship import ships
def run_game():

    py.init()
    ai_setting=settings()
    # screen=py.display.set_mode(ai_setting.screen_wid,ai_setting.screen_hei)
    # 设置主窗口
    screen=py.display.set_mode((1200,800))
    # 窗口标题
    py.display.set_caption("Alien Invasion")
    bg_color=(230,230,230)
    # 使用images下的图片
    ship=ships(screen)
    while True:
        screen.fill(ai_setting.bg_color)
        # 图像添加到主屏幕，相当于screen.blit(image, (200, 200))
        ship.blitme()
        for event in py.event.get():
            if event.type == py.QUIT:
               sys.exit()
            #更新屏幕内容
            py.display.flip()
# 函数声明和调用的地方要对齐
run_game()