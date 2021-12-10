import { logDOM } from '@testing-library/dom';
import React from 'react';
import { useState } from 'react';
import "../accordion.css";
import kubernetesLogo from "../images/komponenter/kubernetes-logo.png"
import MapRLogo from "../images/komponenter/MapR-logo.png"
import RancherLogo from "../images/komponenter/rancher-logo.png"
import FreeipaLogo from "../images/komponenter/freeipa-logo.png"
import graviteeLogo from "../images/komponenter/gravitee-logo.jpg"
import KeycloakLogo from "../images/komponenter/keycloak-logo.png"
import MariadbLogo from "../images/komponenter/mariadb-logo.png"
import MongodbLogo from "../images/komponenter/Mongodb-logo.png"
import PostfixLogo from "../images/komponenter/Postfix-logo.png"
import HaproxyLogo from "../images/komponenter/haproxy-logo.png"
import AnsibleLogo from "../images/komponenter/ansible-logo.png"
import ElasticsearchLogo from "../images/komponenter/elasticsearch-logo.png"
import KibanaLogo from "../images/komponenter/kibana-logo.png"
import ZabbixLogo from "../images/komponenter/zabbix-logo.png"
import PrometheusLogo from "../images/komponenter/prometheus-logo.png"
import GrafanaLogo from "../images/komponenter/grafana-logo.png"
import JaegerLogo from "../images/komponenter/jaeger-logo.png"
import GitlabLogo from "../images/komponenter/gitlab-logo.jpg"
import HaborLogo from "../images/komponenter/habor-logo.png"
import JfrogLogo from "../images/komponenter/jfrog-logo.png"
import JenkinsLogo from "../images/komponenter/jenkins-logo.png"
import JiraLogo from "../images/komponenter/jira-Logo.png"
import ConfluenceLogo from "../images/komponenter/confluence-logo.png"

const Komponenter = () => {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <div className="font-link">
            <div className="pagesMove">
                <h2 className="title2">Komponenter</h2>
                <div>Valg af infrastruktur komponenter og tools.</div>
                <br />

                <div className="wrapper">
                    <div className="accordion">
                        {data.map((item, i) => (
                            <div className="item">
                                <div key={data.id} className="title" onClick={() => toggle(i)}>
                                    <h4>{item.title}</h4>
                                    <h5>{selected === i ? "-" : "+"}</h5>
                                </div>
                                <div className={selected === i ? "contentAccordion show" : "contentAccordion"}>
                                    {item.desciption}
                                    <br />
                                    {item.additionalInfo}
                                    <img className="kompImg" src={item.image}></img>
                                    <br />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )

}

const data = [
    {
        title: "Service fabric",
        desciption: "Som service fabric er valgt Gravitee fra gravitee.io.",
        image: `${graviteeLogo}`
    },
    {
        title: "Appication fabric",
        desciption: "Application fabric (workloads) køres i et Kubernetes cluster i Docker containere (Kubernetes pods).",
        image: `${kubernetesLogo}`
    },
    {
        title: "Data fabric",
        desciption: "Som Data fabric - opbevaring af data - er der opsat et MapR cluster i version 6.1. Der er udtrykt ønske om at GovCloud skal stille en alternativ data fabric til rådighed i form af en mere basal storage (block storage) som f.eks. Openstack storage noder eller lign.",
        image: `${MapRLogo}`
    },
    {
        title: "Rancher",
        desciption: "Kubernetes administreres (af både GovCloud drift og GovCloud kunder) via Rancher. ",
        image: `${RancherLogo}`
    },
    {
        title: "FreeIPA",
        desciption: "Andre såkaldte basis tools udgøres af en lokalt bruger direktorie etableret via FreeIPA fra Redhat. Free IPA udstiller også servervices som:",
        additionalInfo: "DNS, Kerberos, PAM (central linux brugerstyring inkl. mulighed for at styre roller og rettigheder), (NTP) [Anvendes ikke - i stedet anvendes SITs centrale NTP]",
        image: `${FreeipaLogo}`
    },
    {
        title: "Keycloack",
        desciption: "Secure token service (STS) som kan udstede SAML, OpenID/OAuth og JWT tokens. STS er etableret via Keycloak fra Redhat (Jboss).",
        image: `${KeycloakLogo}`
    },
    {
        title: "MariaDB",
        desciption: "Som relationel database anvendes MariaDB (Mysql klon).",
        image: `${MariadbLogo}`
    },
    {
        title: "MongoDB",
        desciption: "Som objekt database (key-value store) anvendes MongoDB.",
        image: `${MongodbLogo}`
    },
    {
        title: "POSTFIX",
        desciption: "Mail / SMTP håndteres lokalt i GovCloud via Postfix.",
        image: `${PostfixLogo}`
    },
    {
        title: "HAProxy",
        desciption: "HAProxy anvendes som reverse-proxy - både for intern og ekstern adgang til services.",
        image: `${HaproxyLogo}`
    },
    {
        title: "Ansible",
        desciption: "Deploy og automation på basisplatformen foregår via Ansible (AWX).",
        image: `${AnsibleLogo}`
    },
    {
        title: "Elasticsearch",
        desciption: "Logfiler opsamles centralt i et Elasticsearch cluster.",
        image: `${ElasticsearchLogo}`
    },
    {
        title: "Kibana",
        desciption: "Log data kan fremfindes via den tilhørende Kibana bruger grænseflade.",
        image: `${KibanaLogo}`
    },
    {
        title: "Zabbix",
        desciption: "Den generelle server overvågning foretages med Zabbix (Med SCOM og Prometheus som alternativer/supplement).",
        image: `${ZabbixLogo}`
    },
    {
        title: "Prometheus",
        desciption: "Prometheus anvendes som indlejrede komponenter i nogle af ovennævnte software komponenter:",
        additionalInfo: "Rancher opsamler run-time tidsserier (load og performance målinger) med en indlejret Prometheus",
        image: `${PrometheusLogo}`
    },
    {
        title: "Grafana",
        desciption: "Visualiseringer og Dashboards vises i Grafana. Grafana er indlejret som Dashboard i Rancher (Kubernetes admin). Grafana er indlejret i MapR monitoring",
        additionalInfo: "Derudover køres en selvstændig Grafana som kan vise data fra Zabbix (og evt. Prometheus).",
        image: `${GrafanaLogo}`
    },
    {
        title: "Jaeger Tracing",
        desciption: "Den kan stilles en Open Tracing API service i form af Jaeger Tracing til rådighed ifm. performance analyser af udvikleres kode/containere/pods/deployments. ",
        image: `${JaegerLogo}`
    },
    {
        title: "Gitlab",
        desciption: "Gitlab tilbydes som software repository med det indbyggede funktioner for versions-styring, dokumentation, bug og issue tracking samt dets indbyggede CI/CD pipeline.",
        image: `${GitlabLogo}`
    },
    {
        title: "Harbor",
        desciption: "Harbor fungerer som Docker repository tilknyttet GovCloud. Der er mulighed for private projekter, hvor images er beskyttet fra adgang.",
        image: `${HaborLogo}`

    },
    {
        title: "Jfrong Artifactory",
        desciption: "jFrog Artifactory fungerer som artefakt repository (opbevaring af binære artefakter (\"artefacts\")- såsom Java .jar filer m.m.).",
        image: `${JfrogLogo}`
    },
    {
        title: "Jenkins",
        desciption: "Jenkins tilbydes som automation komponent. Oftest anvendt i en CI-CD pipeline. Men kan også bruges til andre almindelige opgaver som ønskes automatiseret.",
        image: `${JenkinsLogo}`
    },
    {
        title: "Jira",
        desciption: "Jira er projektstyringsværktøj, og tilbyder skabeloner for forskellige projektmodeller. Jira slår sig specifikt op på at understøtte agile projektteams og de tilhørende styringsmodeller. Jira er også velegnet til almindelige driftsmæssig sagsbehandling (tasks, issues og bugs).",
        image: `${JiraLogo}`
    },

    {
        title: "Confluence",
        desciption: "Confluence er en wiki (dokumentationsplatform) som er tæt linket til Jira. Der er mulighed for at oprette 'projekter' og indenfor rammerne af disse dokumentere løsninger og linke direkte til sager i Jira.",
        additionalInfo: "Confluence og Jira deler brugerdatabase og rettighedsmodel. Begge løsninger er leveret af Atlassian, og SIT har en 25 bruger licens til hhv. Jira og Confluence.",
        image: `${ConfluenceLogo}`
    },
]

export default Komponenter;