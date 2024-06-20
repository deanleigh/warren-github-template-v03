const n = {
  alias: "dashboard.dean",
  type: "dashboard",
  name: "Dean Dashboard",
  meta: {
    label: "Dashboard for Dean",
    pathname: "/dashboard-dean"
  },
  js: () => import("./dashboard.chart.element-FxHDcKCS.js"),
  conditions: [
    {
      alias: "Umb.Condition.SectionAlias",
      match: "Umb.Section.Content"
    }
  ]
}, o = [n], s = (t, a) => {
  a.registerMany([
    ...o
  ]);
};
export {
  s as onInit
};
//# sourceMappingURL=warren.github.template.v03.js.map
