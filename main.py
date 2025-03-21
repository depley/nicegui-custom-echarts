from nicegui import ui

from custom_elements.my_echart import MyEChart


MyEChart({
    'xAxis': {'type': 'value'},
    'yAxis': {'type': 'value'},
    'series': [{'type': 'scatter', 'data': [[x, x] for x in range(50_000)]}],
})


#NOTE - to ensure edits in *.js,*.vue are served to the browser,
#       deactivate the browser cache, i.e. DevTools / network / deactivate cache

ui.run(uvicorn_reload_includes='*.py,*.js,*.vue')

