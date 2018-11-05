def laven_dist(s, t):
    if s == "":
        return len(t)
    if t == "":
        return len(s)
    if s[-1] == t[-1]:
        cost = 0
    else:
        cost = 1

    res = min([laven_dist(s[:-1], t) + 1,
               laven_dist(s, t[:-1]) + 1,
               laven_dist(s[:-1], t[:-1]) + cost])
    return res