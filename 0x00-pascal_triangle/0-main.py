#!/usr/bin/python3
"""
0-main
"""
pascal_triangle = __import__('0-pascal_triangle').pascal_triangle

def print_triangle(triangle):
    """
    Print the triangle
    """
    for row in triangle:
        print("[{}]".format(",".join([str(x) for x in row]).center(2 * len(triangle[-1]) - 1)))


if __name__ == "__main__":
    print_triangle(pascal_triangle(5))