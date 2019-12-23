import re

CLEAR_TAGS = ["script", "style", "input", "button", "br", "stop", "path"]


def clean_boilerplate(e_list):
    rs = []
    for e in e_list:
        start, end = re.search('^<[A-Za-z]+', e).span()

        # Get tag name
        tag_name = e[start + 1:end]

        print("=====================")
        print(tag_name)

        if tag_name not in CLEAR_TAGS:
            rs.append(e)

    return rs
