import { LitElement, css, html, customElement, render} from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import "@umbraco-cms/backoffice/log-viewer";
// impoert function for the test button from the function-show-alert.ts
 import { showAlert } from "./function-show-alert";

@customElement('dashboard-chart')
export class DashboardChartElement extends UmbElementMixin(LitElement) {

    // Example method that uses the showAlert function
    callAlert() {
        showAlert(); // This will show the alert with the message "Hello Dean!"
    }

    render() {
        return html`
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
}

customElements.define(
    "measure-bar",
    class extends HTMLElement {
      constructor() {
        super();
  
        // Initialize the shadow DOM
        const shadow = this.attachShadow({ mode: "open" });
  
        // Create the number-box div and number span
        const numberBox = document.createElement("div");
        numberBox.className = "number-box";
        numberBox.setAttribute("part", "number-box"); // Expose this part for styling
        const numberSpan = document.createElement("span");
        numberSpan.className = "number";
        numberBox.appendChild(numberSpan);
        shadow.appendChild(numberBox);
  
        // Set up the ResizeObserver
        const myObserver = new ResizeObserver((entries) => {
          entries.forEach((entry) => {
            // Update the content of the number span with the new width
            numberSpan.textContent = entry.contentRect.width + "px";
          });
        });
  
        // Observe the host element for resize events
        myObserver.observe(this);
  
        // Include the CSS by creating a <style> element
        const style = document.createElement("style");
        style.textContent = `
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
        `;
        shadow.appendChild(style);
      }
    }
  );
  
export default DashboardChartElement;

declare global {
  interface HTMLElementTagNameMap {
    'dashboard-chart': DashboardChartElement;
  }
}