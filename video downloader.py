import pytube as yt

url="https://www.youtube.com/watch?v=V5En3Ks3OjE"

down=yt.YouTube(url)
vid=down.streams.get_highest_resolution()
vid.download()