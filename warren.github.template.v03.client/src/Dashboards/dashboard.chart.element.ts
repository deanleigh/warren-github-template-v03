import { LitElement, css, html, customElement} from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import "@umbraco-cms/backoffice/log-viewer";

@customElement('dashboard-chart')
export class DashboardChartElement extends UmbElementMixin(LitElement) {

    render() {
        return html`
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
        alert('Hello Dean!');
    }
}

export default DashboardChartElement;

declare global {
  interface HTMLElementTagNameMap {
    'dashboard-chart': DashboardChartElement;
  }
}