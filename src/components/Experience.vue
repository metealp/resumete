<template>
    <div class="q-px-lg q-py-md">
        <q-timeline color="secondary">
        
        <q-timeline-entry heading>
            Professional Experience
        </q-timeline-entry>

        <q-timeline-entry
            title="Senior Python Developer at Enpal BV"
            subtitle="April, 2023 ~ Present | Renewable Energy / Solar Tech"
            class="q-mb-md"
        >
            <div>
                <ul>
                    <li>Designed and implemented an automation platform for legal-critical shipping, reducing delivery delays from 4 weeks to 5 days, preventing legal penalties.</li>
                    <li>Created QR-code-enabled logistics workflows and electrician accountability dashboards.</li>
                    <li>Developed micro-frontends to visualize automation results for internal teams.</li>
                    <li>Mentored junior developers, led architectural decisions, and optimized workflows.</li>
                    <li>Increased automation success rate from ~70% to 95–96%.</li>
                    <li>Currently building a document validation system for solar infrastructure financing, improving success rates from 54% to 75% in 5 months.</li>
                </ul>
                <div><strong>Technologies:</strong> Python, FastAPI, Azure, Terraform, Docker, React, TypeScript, Power BI</div>
            </div>
        </q-timeline-entry>

        <q-timeline-entry
            title="Fullstack Developer at Chairish"
            subtitle="January, 2022 ~ March, 2023 | E-commerce (Post-Acquisition)"
            class="q-mb-md"
        >
            <div>
                <ul>
                    <li>Migrated complex product category taxonomies from Pamono to Chairish.</li>
                    <li>Helped launch Chairish's international expansion, including Canada and pre-launch prep for Mexico.</li>
                    <li>Collaborated with global teams across the U.S., Japan, and Australia.</li>
                    <li>Contributed to internal platform integration and cross-org knowledge transfer.</li>
                </ul>
                <div><strong>Technologies:</strong> Python, Django, PostgreSQL, jQuery, LESS</div>
            </div>
        </q-timeline-entry>

        <q-timeline-entry
            title="Frontend Developer at Pamono"
            subtitle="March, 2021 ~ March, 2023 | E-commerce"
            class="q-mb-md"
        >
            <div>
                <ul>
                    <li>Led GDPR compliance efforts, auditing and centralizing all cookie tracking systems.</li>
                    <li>Enhanced both the customer-facing shop and vendor portal UX.</li>
                    <li>Instrumented analytics with Google Tag Manager, enabling detailed A/B testing.</li>
                    <li>Built the Vendor Communication Tool (VCA), a messaging platform with smart redirection and moderation layers.</li>
                    <li>Improved page performance and legacy browser compatibility; reduced initial load times by ~2.5 seconds.</li>
                </ul>
                <div><strong>Technologies:</strong> JavaScript/TypeScript, React, jQuery, SCSS, Node.js, MySQL, AWS, Docker, Google Tag Manager</div>
            </div>
        </q-timeline-entry>

        <q-timeline-entry
            title="Fullstack Developer at Techtile"
            subtitle="January, 2021 ~ March, 2021 | Healthcare / Research"
            class="q-mb-md"
        >
            <div>
                <ul>
                    <li>Delivered two MVPs independently for early-stage healthcare products.</li>
                    <li>Built an anonymized diagnosis platform to reduce bias in clinical decisions.</li>
                    <li>Developed a preclinical research tracking tool for drug testing on lab animals.</li>
                    <li>Took full ownership of frontend (React) and backend (Express/Node.js) development.</li>
                </ul>
                <div><strong>Technologies:</strong> JavaScript/TypeScript, Node.js, Express, PostgreSQL, React</div>
            </div>
        </q-timeline-entry>

        <q-timeline-entry
            title="Frontend Developer at Medcase"
            subtitle="June, 2020 ~ March, 2021 | Healthcare / Clinical Trials"
            class="q-mb-md"
        >
            <div>
                <ul>
                    <li>Rebuilt an unstable alpha version of a clinical form dashboard into a robust v1 product.</li>
                    <li>Reduced support inquiries by over 90% via usability and accessibility improvements.</li>
                    <li>Ensured performance and cross-browser support for doctors using outdated hospital systems.</li>
                    <li>Collaborated closely with backend engineers and designers on user-focused iteration.</li>
                </ul>
                <div><strong>Technologies:</strong> JavaScript, Vue, SCSS, jQuery</div>
            </div>
        </q-timeline-entry>

        <q-timeline-entry
            title="BIM Developer at Nika PM"
            subtitle="November, 2018 ~ June, 2020 | Infrastructure / Metro Projects"
            class="q-mb-md"
        >
            <div>
                <ul>
                    <li>Developed Revit plugins and Dynamo scripts for architectural, structural, and electrical automation.</li>
                    <li>Automated LOD 300→500 transitions, tunnel lining generation, and electrical device placement.</li>
                    <li>Established coordinate system alignment for cross-department BIM collaboration.</li>
                    <li>Saved over 20,000 man-hours through process automation and standardization.</li>
                    <li>Generated reports for Metro Istanbul with Power BI dashboards.</li>
                </ul>
                <div><strong>Technologies:</strong> Python, IronPython, Dynamo, Revit API, Power BI</div>
            </div>
        </q-timeline-entry>

        </q-timeline>
    </div>
</template>

<script>
export default {
    computed: {
        layout () {
        return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
        }
    }
}

</script>

<style>

</style>

<!-- EXPERIENCE
Senior Python Developer, Enpal BV
04/2023 – Present | Renewable Energy / Solar Tech
•	Designed and implemented an automation platform for legal-critical shipping, reducing delivery delays from 4 weeks to 5 days, preventing legal penalties.
•	Created QR-code-enabled logistics workflows and electrician accountability dashboards.
•	Developed micro-frontends to visualize automation results for internal teams.
•	Mentored junior developers, led architectural decisions, and optimized workflows.
•	Increased automation success rate from ~70% to 95–96%.
•	Currently building a document validation system for solar infrastructure financing, improving success rates from 54% to 75% in 5 months.
Technologies: Python, FastAPI, Azure, Terraform, Docker, React, TypeScript, Power BI
Fullstack Developer, Chairish
01/2022 – 03/2023 | E-commerce (Post-Acquisition)
•	Migrated complex product category taxonomies from Pamono to Chairish.
•	Helped launch Chairish's international expansion, including Canada and pre-launch prep for Mexico.
•	Collaborated with global teams across the U.S., Japan, and Australia.
•	Contributed to internal platform integration and cross-org knowledge transfer.
Technologies: Python, Django, PostgreSQL, jQuery, LESS
Frontend Developer, Pamono
03/2021 – 03/2023 | E-commerce
•	Led GDPR compliance efforts, auditing and centralizing all cookie tracking systems.
•	Enhanced both the customer-facing shop and vendor portal UX.
•	Instrumented analytics with Google Tag Manager, enabling detailed A/B testing.
•	Built the Vendor Communication Tool (VCA), a messaging platform with smart redirection and moderation layers.
•	Improved page performance and legacy browser compatibility; reduced initial load times by ~2.5 seconds.
Technologies: JavaScript/TypeScript, React, jQuery, SCSS, Node.js, MySQL, AWS, Docker, Google Tag Manager

Fullstack Developer, Techtile
01/2021 – 03/2021 | Healthcare / Research
•	Delivered two MVPs independently for early-stage healthcare products.
•	Built an anonymized diagnosis platform to reduce bias in clinical decisions.
•	Developed a preclinical research tracking tool for drug testing on lab animals.
•	Took full ownership of frontend (React) and backend (Express/Node.js) development.
Technologies: JavaScript/TypeScript, Node.js, Express, PostgreSQL, React
Frontend Developer, Medcase
06/2020 – 03/2021 | Healthcare / Clinical Trials
•	Rebuilt an unstable alpha version of a clinical form dashboard into a robust v1 product.
•	Reduced support inquiries by over 90% via usability and accessibility improvements.
•	Ensured performance and cross-browser support for doctors using outdated hospital systems.
•	Collaborated closely with backend engineers and designers on user-focused iteration.
Technologies: JavaScript, Vue, SCSS, jQuery
BIM Developer, Nika PM
11/2018 – 06/2020 | Infrastructure / Metro Projects
•	Developed Revit plugins and Dynamo scripts for architectural, structural, and electrical automation.
•	Automated LOD 300→500 transitions, tunnel lining generation, and electrical device placement.
•	Established coordinate system alignment for cross-department BIM collaboration.
•	Saved over 20,000 man-hours through process automation and standardization.
•	Generated reports for Metro Istanbul with Power BI dashboards.
Technologies: Python, IronPython, Dynamo, Revit API, Power BI -->
