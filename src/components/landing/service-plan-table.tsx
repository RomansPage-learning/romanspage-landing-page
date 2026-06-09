import { Reveal } from "@/components/landing/reveal";

const planRows = [
  { name: "Employment Engagement", startup: "Yes", sme: "Yes" },
  { name: "Payroll Management (Tax, Pension, NSITF, NHF)", startup: "Yes", sme: "Yes" },
  { name: "Recruitment", startup: "No", sme: "Yes" },
  { name: "Policies and Documentation", startup: "Yes", sme: "Yes" },
  { name: "Training", startup: "No", sme: "Yes" },
  { name: "Unlimited HR Support", startup: "Yes", sme: "Yes" },
];

export function ServicePlanTable() {
  return (
    <section className="section" aria-labelledby="plan-table-title">
      <div className="container stack-lg">
        <p className="eyebrow">Plan Comparison</p>
        <h2 id="plan-table-title">Reliable and cost-efficient HR solutions</h2>
        <Reveal>
          <div className="table-wrap">
            <table className="plan-table">
            <thead>
              <tr>
                <th>HR Service Offering</th>
                <th>Startup Plan</th>
                <th>SME Plan</th>
              </tr>
            </thead>
            <tbody>
              {planRows.map((row) => (
                <tr key={row.name}>
                  <td>{row.name}</td>
                  <td>
                    <span className={`plan-pill ${row.startup === "Yes" ? "is-yes" : "is-no"}`}>{row.startup}</span>
                  </td>
                  <td>
                    <span className={`plan-pill ${row.sme === "Yes" ? "is-yes" : "is-no"}`}>{row.sme}</span>
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
