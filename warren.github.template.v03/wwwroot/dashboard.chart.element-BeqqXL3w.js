import { LitElement as n, html as s, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as h } from "@umbraco-cms/backoffice/element-api";
import "@umbraco-cms/backoffice/log-viewer";
var p = Object.defineProperty, b = Object.getOwnPropertyDescriptor, x = (i, t, o, r) => {
  for (var e = r > 1 ? void 0 : r ? b(t, o) : t, l = i.length - 1, u; l >= 0; l--)
    (u = i[l]) && (e = (r ? u(t, o, e) : u(e)) || e);
  return r && e && p(t, o, e), e;
};
let a = class extends h(n) {
  render() {
    return s`
            <uui-box headline="Hello World" style="margin:20px;">
                <p>A UUI Box with an HTML paragraph</p>                
            </uui-box>
            <!-- This is the markup for the test button -->
            <uui-box headline="Test Button" style="margin:20px;">
            <uui-form>
            <uui-button label="xxxx" @click="${this.showAlert}">Click me!</uui-button>
            </uui-form>            
            </uui-box>
        `;
  }
  // This is the function for the test button
  showAlert() {
    alert("Hello Dean!");
  }
};
a = x([
  m("dashboard-chart")
], a);
const v = a;
export {
  a as DashboardChartElement,
  v as default
};
//# sourceMappingURL=dashboard.chart.element-BeqqXL3w.js.map
