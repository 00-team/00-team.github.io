import httpwatcher


httpwatcher.watch(
    './', 
    watch_paths=['./static/dev/','./static/css/'], 
    on_reload=None, 
    host='localhost', 
    port=9000, 
    server_base_path='/', 
    watcher_interval=1.0, 
    recursive=True, 
    open_browser=True, 
    open_browser_delay=1.0
)