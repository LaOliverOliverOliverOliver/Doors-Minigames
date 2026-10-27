import http.server, socketserver, os, threading, webbrowser
# Run with: python serve.py   (then the game loads every .json in the properties folder)
os.chdir(os.path.dirname(os.path.abspath(__file__)))
try:
    import build_bundle; print('bundle.js refreshed:', build_bundle.main())
except Exception as e:
    print('could not refresh bundle.js:', e)
class H(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store"); super().end_headers()
    def log_message(self, *a): pass
socketserver.ThreadingTCPServer.allow_reuse_address = True
srv = None
for port in range(8000, 8020):
    try:
        srv = socketserver.ThreadingTCPServer(("127.0.0.1", port), H); break
    except OSError:
        continue
if not srv: raise SystemExit("No free port between 8000 and 8019")
url = f"http://localhost:{port}/index.html"
print("DOORS: Minigames is running at", url, "- press Ctrl+C to stop")
threading.Timer(0.5, lambda: webbrowser.open(url)).start()
try: srv.serve_forever()
except KeyboardInterrupt: pass
