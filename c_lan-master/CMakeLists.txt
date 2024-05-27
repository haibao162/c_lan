cmake_minimum_required(VERSION 3.26)
project(c_lan)

set(CMAKE_CXX_STANDARD 14)

include_directories("c primer plus/12")

add_executable(c_lan
        array/arr1.c
        array/arr_pointer.c
        array/quicksort.c
        array/zippo1.c
        "c primer plus/1/char.c"
        "c primer plus/11-字符串/char.c"
        "c primer plus/11-字符串/fgets.cpp"
        "c primer plus/11-字符串/fgets2.cpp"
        "c primer plus/11-字符串/fgets3.cpp"
        "c primer plus/11-字符串/getchar.c"
        "c primer plus/11-字符串/getchar2.c"
        "c primer plus/11-字符串/getchar3.c"
        "c primer plus/11-字符串/putchar.c"
        "c primer plus/11-字符串/scanf.c"
        "c primer plus/12/r_drive0.c"
        "c primer plus/12/rand0.c"
        "c primer plus/12/rand0.h"
        "c primer plus/17/films1.c"
        "c primer plus/9-函数/factor.c"
        sequence-table/LinkList.cpp
        sequence-table/list.cpp
        sequence-table/swap.cpp
        string/char1.c
        struct/list.cpp
        struct/node.cpp
        struct/point.c)
