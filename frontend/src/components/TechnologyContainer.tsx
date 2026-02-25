import {SimpleIconComponent} from "./SimpleIconComponent.tsx";
import {
    siApachemaven, siArduino,
    siAuthentik, siBambulab,
    siBootstrap,
    siCaddy, siCplusplus,
    siDebian,
    siDocker,
    siDocusaurus,
    siDotnet, siEspressif,
    siGithubactions,
    siGradle,
    siJenkins,
    siMariadb,
    siPostgresql,
    siReact,
    siReactbootstrap,
    siReactquery,
    siSpring,
    siSpringboot,
    siTailscale,
    siTailwindcss,
    siTypescript
} from "simple-icons";
import DockgeLogo from "./icons/DockgeLogo.tsx";
import {NexTermIcon} from "./icons/NexTermIcon.tsx";
import {CoderIcon} from "./icons/CoderIcon.tsx";
import {JwtIcon} from "./icons/JwtIcon.tsx";
import {PlasticityIcon} from "./icons/PlasticityIcon.tsx";
import {ReactNode} from "react";

export enum TechnologyType {
    FRONTEND,
    BACKEND,
    DEVOPS,
    HOMELAB,
    ELECTRONICS,
}

export function TechnologyContainer({type}: { type: TechnologyType }) {
    return (
        <div className="glass-card flex flex-col w-full p-6">
            <div className="flex flex-row w-full">
                {type === TechnologyType.FRONTEND && <Frontend/>}
                {type === TechnologyType.BACKEND && <Backend/>}
                {type === TechnologyType.DEVOPS && <DevOps/>}
                {type === TechnologyType.HOMELAB && <HomeServer/>}
                {type === TechnologyType.ELECTRONICS && <Electronics/>}
            </div>
        </div>
    );
}

const TechTab = ({name, children}: { name: string, children: ReactNode }) => {
    return (
        <div className="flex flex-row z-10 gap-5 w-full">
            <div className="flex flex-col w-full gap-3">
                <div className="font-display text-lg font-semibold max-sm:text-base max-md:text-base text-primary border-l-2 border-accent pl-3">{name}</div>
                <div className="flex flex-row w-full gap-2 flex-wrap max-xl:grid max-sm:grid-cols-3 max-md:grid-cols-4 max-xl:grid-cols-6">
                    {children}
                </div>
            </div>
        </div>
    )
}

const Frontend = () => (
    <TechTab name="Frontend Technologies">
        <SimpleIconComponent icon={siReact} text="React"/>
        <SimpleIconComponent icon={siTailwindcss} text="Tailwind CSS"/>
        <SimpleIconComponent icon={siTypescript} text="TypeScript"/>
        <SimpleIconComponent icon={siReactquery} text="React Query"/>
        <SimpleIconComponent icon={siBootstrap} text="Bootstrap"/>
        <SimpleIconComponent icon={siReactbootstrap} text="React Bootstrap"/>
    </TechTab>
);

const Backend = () => (
    <TechTab name="Backend Technologies">
        <SimpleIconComponent icon={siSpring} text="Spring"/>
        <SimpleIconComponent icon={siSpringboot} text="Spring Boot"/>
        <SimpleIconComponent icon={siGradle} text="Gradle"/>
        <SimpleIconComponent icon={siApachemaven} text="Maven"/>
        <SimpleIconComponent icon={siDotnet} text=".NET"/>
        <SimpleIconComponent icon={siPostgresql} text="PostgreSQL"/>
        <SimpleIconComponent icon={siMariadb} text="MariaDB"/>
        <SimpleIconComponent icon={<JwtIcon/>} text="Jwt"/>
    </TechTab>
);

const DevOps = () => (
    <TechTab name="DevOps Technologies">
        <SimpleIconComponent icon={siDocker} text="Docker"/>
        <SimpleIconComponent icon={siJenkins} text="Jenkins"/>
        <SimpleIconComponent icon={siGithubactions} text="GitHub Actions"/>
        <SimpleIconComponent icon={<DockgeLogo/>} text="Dockge"/>
    </TechTab>
);

const HomeServer = () => (
    <TechTab name="Home Lab Technologies">
        <SimpleIconComponent icon={siDebian} text="Debian"/>
        <SimpleIconComponent icon={siCaddy} text="Caddy"/>
        <SimpleIconComponent icon={siAuthentik} text="Authentik"/>
        <SimpleIconComponent icon={siDocusaurus} text="Docusaurus"/>
        <SimpleIconComponent icon={siTailscale} text="Headscale" fill="FFFFFF"/>
        <SimpleIconComponent icon={<NexTermIcon/>} text="NexTerm"/>
        <SimpleIconComponent icon={<CoderIcon/>} text="VSCode Server"/>
    </TechTab>
);

const Electronics = () => (
    <TechTab name="Electronics & 3D Printing Technologies">
        <SimpleIconComponent icon={<PlasticityIcon/>} text="Plasticity"/>
        <SimpleIconComponent icon={siBambulab} text="Bambu Studio"/>
        <SimpleIconComponent icon={siEspressif} text="ESP32"/>
        <SimpleIconComponent icon={siArduino} text="Arduino"/>
        <SimpleIconComponent icon={siCplusplus} text="C++"/>
    </TechTab>
);