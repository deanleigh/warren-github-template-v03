import { LitElement as l, html as u, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as c } from "@umbraco-cms/backoffice/element-api";
import "@umbraco-cms/backoffice/log-viewer";
function p() {
  alert("Hello Dean!");
}
var d = Object.defineProperty, b = Object.getOwnPropertyDescriptor, h = (n, t, r, o) => {
  for (var e = o > 1 ? void 0 : o ? b(t, r) : t, a = n.length - 1, s; a >= 0; a--)
    (s = n[a]) && (e = (o ? s(t, r, e) : s(e)) || e);
  return o && e && d(t, r, e), e;
};
let i = class extends c(l) {
  // Example method that uses the showAlert function
  callAlert() {
    p();
  }
  render() {
    return u`
            <uui-box headline="Hello World" style="margin:20px;">
                <p>A UUI Box with an HTML paragraph</p>                
            </uui-box>
            <!-- This is the markup for the test button -->
            <uui-box headline="Test Button" style="margin:20px;">
            <uui-form>
            <uui-button label="xxxx" @click="${this.callAlert}">Click me!</uui-button>
            </uui-form>            
            </uui-box>
            <uui-box headline="Divinator" style="margin:20px;">
        <measure-bar></measure-bar>             
            </uui-box>
        `;
  }
  // This is the function for the test button
  // showAlert() {
  //     alert('Hello Dean!');
  // }
};
i = h([
  m("dashboard-chart")
], i);
customElements.define(
  "measure-bar",
  class extends HTMLElement {
    constructor() {
      super();
      const n = this.attachShadow({ mode: "open" }), t = document.createElement("div");
      t.className = "number-box", t.setAttribute("part", "number-box");
      const r = document.createElement("span");
      r.className = "number", t.appendChild(r), n.appendChild(t), new ResizeObserver((a) => {
        a.forEach((s) => {
          r.textContent = s.contentRect.width + "px";
        });
      }).observe(this);
      const e = document.createElement("style");
      e.textContent = `
        :host {
        //outline: #000 dashed 1px;
        font-family: "source-code-pro", monospace;
        box-sizing: border-box;
        display: grid;
        place-items: center;
        height: 21px;
        background-image: linear-gradient(
        to right,
        red 1px,
        transparent 1px,
        transparent calc(100% - 1px),
        red calc(100% - 1px)
      ),
      linear-gradient(white 50%, red 10px 11px, white 50%);
  }
  
          .number-box {
            background-color: #fff;
            color: #000;
            padding: 0 0.5rem;
            font-weight: 700;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
          }
          .number {
            /* Your CSS for number */
          }
          /* Add other component-specific styles here */
        `, n.appendChild(e);
    }
  }
);
const v = i;
export {
  i as DashboardChartElement,
  v as default
};
//# sourceMappingURL=dashboard.chart.element-FxHDcKCS.js.map
