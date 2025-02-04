import {SimpleIconComponent} from "./icons/SimpleIconComponent.tsx";
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

export enum TechnologyType {
    FRONTEND,
    BACKEND,
    DEVOPS,
    HOMELAB,
    ELECTRONICS,
}

export function TechnologyContainer({type}: { type: TechnologyType }) {
    return (
        <div className="relative flex flex-col container p-5 rounded-2xl">
            <div className="absolute inset-0 rounded-2xl backdrop-blur-4xl blur-xs bg-text opacity-6 z-0"></div>
            <div className="relative flex flex-row z-10 gap-5">
                {type === TechnologyType.FRONTEND && <Frontend/>}
                {type === TechnologyType.BACKEND && <Backend/>}
                {type === TechnologyType.DEVOPS && <DevOps/>}
                {type === TechnologyType.HOMELAB && <HomeServer/>}
                {type === TechnologyType.ELECTRONICS && <Electronics/>}
            </div>
        </div>
    );
}

const Frontend = () => (
    <div className="relative flex flex-row z-10 gap-5 container">
        <div className="flex flex-col container gap-1">
            <div className="text-2xl font-medium">Frontend Technologies</div>
            <div className="flex flex-row container gap-2">
                <SimpleIconComponent icon={siReact} text="React"/>
                <SimpleIconComponent icon={siTailwindcss} text="Tailwind CSS"/>
                <SimpleIconComponent icon={siTypescript} text="TypeScript"/>
                <SimpleIconComponent icon={siReactquery} text="React Query"/>
                <SimpleIconComponent icon={siBootstrap} text="Bootstrap"/>
                <SimpleIconComponent icon={siReactbootstrap} text="React Bootstrap"/>
            </div>
        </div>
    </div>
);

const Backend = () => (
    <div className="relative flex flex-row z-10 gap-5 container">
        <div className="flex flex-col container gap-1">
            <div className="text-2xl font-medium">Backend Technologies</div>
            <div className="flex flex-row container gap-2">
                <SimpleIconComponent icon={siSpring} text="Spring"/>
                <SimpleIconComponent icon={siSpringboot} text="Spring Boot"/>
                <SimpleIconComponent icon={siGradle} text="Gradle"/>
                <SimpleIconComponent icon={siApachemaven} text="Maven"/>
                <SimpleIconComponent icon={siDotnet} text=".NET"/>
                <SimpleIconComponent icon={siPostgresql} text="PostgreSQL"/>
                <SimpleIconComponent icon={siMariadb} text="MariaDB"/>
                <SimpleIconComponent icon={<JwtIcon/>} text="Jwt"/>
            </div>
        </div>
    </div>
);

const DevOps = () => (
    <div className="relative flex flex-row z-10 gap-5 container">
        <div className="flex flex-col container gap-1">
            <div className="text-2xl font-medium">DevOps Technologies</div>
            <div className="flex flex-row container gap-2">
                <SimpleIconComponent icon={siDocker} text="Docker"/>
                <SimpleIconComponent icon={siJenkins} text="Jenkins"/>
                <SimpleIconComponent icon={siGithubactions} text="GitHub Actions"/>
                <SimpleIconComponent icon={<DockgeLogo/>} text="Dockge"/>
            </div>
        </div>
    </div>
);

const HomeServer = () => (
    <div className="relative flex flex-row z-10 gap-5 container">
        <div className="flex flex-col container gap-1">
            <div className="text-2xl font-medium">Home Lab Technologies</div>
            <div className="flex flex-row container gap-2">
                <SimpleIconComponent icon={siDebian} text="Debian"/>
                <SimpleIconComponent icon={siCaddy} text="Caddy"/>
                <SimpleIconComponent icon={siAuthentik} text="Authentik"/>
                <SimpleIconComponent icon={siDocusaurus} text="Docusaurus"/>
                <SimpleIconComponent icon={siTailscale} text="Headscale" fill="FFFFFF"/>
                <SimpleIconComponent icon={<NexTermIcon/>} text="NexTerm"/>
                <SimpleIconComponent icon={<CoderIcon/>} text="VSCode Server"/>
            </div>
        </div>
    </div>
);

const Electronics = () => (
    <div className="relative flex flex-row z-10 gap-5 container">
        <div className="flex flex-col container gap-1">
            <div className="text-2xl font-medium">Electronics & 3D Printing Technologies</div>
            <div className="flex flex-row container gap-2">
                <SimpleIconComponent icon={<PlasticityIcon/>} text="Plasticity"/>
                <SimpleIconComponent icon={siBambulab} text="Bambu Studio"/>
                <SimpleIconComponent icon={siEspressif} text="ESP32"/>
                <SimpleIconComponent icon={siArduino} text="Arduino"/>
                <SimpleIconComponent icon={siCplusplus} text="C++"/>
            </div>
        </div>
    </div>
);