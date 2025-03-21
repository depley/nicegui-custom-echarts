# add custom echarts integration to nicegui

How to integrate [Apache ECharts](https://echarts.apache.org/examples/en/index.html) in [NiceGUI](https://nicegui.io), but slightly customized.<br>
Based on the zauberzeug/nicegui discussion [apache echart always renders twice, why? #4501](https://github.com/zauberzeug/nicegui/discussions/4501).

## research

**TL;DR**: 
 - just subclass ui.element and implement a corresponding Vue component
 - currently echarts is integrated mainly via `nicegui/elements/echart.py`, `nicegui/elements/echart.js`

**how to**
- [nicegui docs Configuration & Deployment: custom_vue_components](https://nicegui.io/documentation/section_configuration_deployment#custom_vue_components)
- [nicegui example: Custom Vue Component](https://github.com/zauberzeug/nicegui/tree/main/examples/custom_vue_component)

**current implementation**
- [search 'echart' in nicegui repo](https://github.com/search?q=repo%3Azauberzeug%2Fnicegui%20echart&type=code), the interesting results:
    - [.. nicegui/elements/echart.py](https://github.com/zauberzeug/nicegui/blob/8d48ec7236fcd8ed55a0c499caf0785581515a0c/nicegui/elements/echart.py#L20)
    - [.. nicegui/elements/echart.js](https://github.com/zauberzeug/nicegui/blob/8d48ec7236fcd8ed55a0c499caf0785581515a0c/nicegui/elements/echart.js#L2)
    - [.. nicegui/events.py](https://github.com/zauberzeug/nicegui/blob/8d48ec7236fcd8ed55a0c499caf0785581515a0c/nicegui/events.py#L66)
    - [.. nicegui/ui.py](https://github.com/zauberzeug/nicegui/blob/8d48ec7236fcd8ed55a0c499caf0785581515a0c/nicegui/ui.py#L37)
    - [.. tests/test_echart.py](https://github.com/zauberzeug/nicegui/blob/8d48ec7236fcd8ed55a0c499caf0785581515a0c/tests/test_echart.py#L89)

## let's go

1. setup

    ```sh
    uv init
    uv add nicegui
    ```

2. create new package `custom_elements` with 1:1 copies of the original echart integration (`nicegui/elements/echart.py`, `nicegui/elements/echart.js`)
    - `src/custom_elements/my_echart.py` 
    - `src/custom_elements/my_echart.js`

3. install new package editable

    ```sh
    uv pip install -e .
    ```

4. code
    - edits at custom_elements each indicated in comments between `SECTION .. !SECTION`
    - create `main.py` to run it

5. 🚀

