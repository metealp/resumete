<template>
    <div id="skillsCont" class="row items-start q-col-gutter-md">
        <!-- Frontend Section -->
        <div class="col-12">
            <h5 class="skill-category">Frontend</h5>
            <div class="row q-col-gutter-sm">
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="vueIcon" id="vueAvatar" text-color="white" />
                        Vue.js
                    </q-chip>
                </div>
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="reactIcon" id="reactAvatar" text-color="white" />
                        React
                    </q-chip>
                </div>
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="reactIcon" id="nextjsAvatar" text-color="white" />
                        Next.js
                    </q-chip>
                </div>
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="htmlIcon" id="htmlAvatar" text-color="white" />
                        HTML5
                    </q-chip>
                </div>
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="cssIcon" id="cssAvatar" text-color="white" />
                        CSS3
                    </q-chip>
                </div>
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="cssIcon" id="sassAvatar" text-color="white" />
                        SCSS
                    </q-chip>
                </div>
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="cssIcon" id="lessAvatar" text-color="white" />
                        LESS
                    </q-chip>
                </div>
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="jsIcon" id="tsAvatar" text-color="white" />
                        TypeScript
                    </q-chip>
                </div>
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="jsIcon" id="jqueryAvatar" text-color="white" />
                        jQuery
                    </q-chip>
                </div>
            </div>
        </div>

        <!-- Backend Section -->
        <div class="col-12">
            <h5 class="skill-category">Backend</h5>
            <div class="row q-col-gutter-sm">
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="nodeIcon" id="nodeAvatar" text-color="white" />
                        Node.js
                    </q-chip>
                </div>
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="jsIcon" id="expressAvatar" text-color="white" />
                        Express.js
                    </q-chip>
                </div>
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="pythonIcon" id="pythonAvatar" text-color="white" />
                        Python
                    </q-chip>
                </div>
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="pythonIcon" id="djangoAvatar" text-color="white" />
                        Django
                    </q-chip>
                </div>
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="pythonIcon" id="fastapiAvatar" text-color="white" />
                        FastAPI
                    </q-chip>
                </div>
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="sqlIcon" id="sqlAvatar" text-color="white" />
                        SQL
                    </q-chip>
                </div>
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="postgresIcon" id="postgresAvatar" text-color="white" />
                        PostgreSQL
                    </q-chip>
                </div>
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="mysqlIcon" id="mysqlAvatar" text-color="white" />
                        MySQL
                    </q-chip>
                </div>
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="mongoIcon" id="mongoAvatar" text-color="white" />
                        MongoDB
                    </q-chip>
                </div>
            </div>
        </div>

        <!-- Mobile Section -->
        <div class="col-12">
            <h5 class="skill-category">Mobile</h5>
            <div class="row q-col-gutter-sm">
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="swiftIcon" id="swiftAvatar" text-color="white" />
                        Swift
                    </q-chip>
                </div>
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="swiftIcon" id="swiftUiAvatar" text-color="white" />
                        SwiftUI
                    </q-chip>
                </div>
            </div>
        </div>

        <!-- DevOps & Data Section -->
        <div class="col-12">
            <h5 class="skill-category">DevOps & Data</h5>
            <div class="row q-col-gutter-sm">
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="dockerIcon" id="dockerAvatar" text-color="white" />
                        Docker
                    </q-chip>
                </div>
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="terraformIcon" id="terraformAvatar" text-color="white" />
                        Terraform
                    </q-chip>
                </div>
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="awsIcon" id="awsAvatar" text-color="white" />
                        AWS
                    </q-chip>
                </div>
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="awsIcon" id="awsSamAvatar" text-color="white" />
                        AWS SAM
                    </q-chip>
                </div>
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="azureIcon" id="azureAvatar" text-color="white" />
                        Azure
                    </q-chip>
                </div>
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="powerbiIcon" id="powerbiAvatar" text-color="white" />
                        Power BI
                    </q-chip>
                </div>
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="gitIcon" id="gitAvatar" text-color="white" />
                        Git
                    </q-chip>
                </div>
            </div>
        </div>

        <!-- Workflow Automation Section -->
        <div class="col-12">
            <h5 class="skill-category">Workflow Automation</h5>
            <div class="row q-col-gutter-sm">
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="revitIcon" id="revitAvatar" text-color="white" />
                        Revit API
                    </q-chip>
                </div>
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="dynamoIcon" id="dynamoAvatar" text-color="white" />
                        Dynamo
                    </q-chip>
                </div>
                <div class="col-6 col-sm-auto">
                    <q-chip size="md" square>
                        <q-avatar font-size="15px" :icon="pyrevitIcon" id="pyrevitAvatar" text-color="white" />
                        pyRevit
                    </q-chip>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { 
    fabVuejs, fabReact, fabHtml5, fabCss3Alt, fabNodeJs, 
    fabEnvira, fabJs, fabDocker, fabGitAlt, fabSwift, 
    fabAws, fabMicrosoft, fabPython, fabJava
} from '@quasar/extras/fontawesome-v5';
import { mdiLanguageTypescript, mdiDatabase, mdiCloudOutline, mdiCog } from '@quasar/extras/mdi-v5';

// Icons
const vueIcon = ref(fabVuejs);
const reactIcon = ref(fabReact);
const htmlIcon = ref(fabHtml5);
const cssIcon = ref(fabCss3Alt);
const jsIcon = ref(fabJs);
const nodeIcon = ref(fabNodeJs);
const mongoIcon = ref(fabEnvira);
const pythonIcon = ref(fabPython);
const sqlIcon = ref(mdiDatabase);
const postgresIcon = ref(mdiDatabase);
const mysqlIcon = ref(mdiDatabase);
const dockerIcon = ref(fabDocker);
const terraformIcon = ref(mdiCloudOutline);
const awsIcon = ref(fabAws);
const azureIcon = ref(fabMicrosoft);
const powerbiIcon = ref(fabMicrosoft);
const gitIcon = ref(fabGitAlt);
const swiftIcon = ref(fabSwift);
const revitIcon = ref(mdiCog);
const dynamoIcon = ref(mdiCog);
const pyrevitIcon = ref(fabPython);
</script>

<style>
.skill-category {
    font-size: 1.5rem;
    margin-bottom: 10px;
    border-bottom: 1px solid #434548;
    padding-bottom: 5px;
}

#tsAvatar {
    background-color: #3178C6;
}
#nextjsAvatar {
    background-color: #000000;
}
#pythonAvatar {
    background-color: #3776AB;
}
#djangoAvatar {
    background-color: #092E20;
}
#fastapiAvatar {
    background-color: #009688;
}
#postgresAvatar {
    background-color: #336791;
}
#mysqlAvatar {
    background-color: #4479A1;
}
#sqlAvatar {
    background-color: #CC2927;
}
#sassAvatar {
    background-color: #CC6699;
}
#lessAvatar {
    background-color: #1D365D;
}
#terraformAvatar {
    background-color: #623CE4;
}
#jqueryAvatar {
    background-color: #0769AD;
}
#awsAvatar, #awsSamAvatar {
    background-color: #FF9900;
}
#powerbiAvatar {
    background-color: #F2C811;
}
#revitAvatar, #dynamoAvatar, #pyrevitAvatar {
    background-color: #005A9C;
}
</style> 