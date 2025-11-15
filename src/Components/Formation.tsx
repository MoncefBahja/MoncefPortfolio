import { Timeline, useMatches } from "@mantine/core";
import { IconSchool, IconCalendar, IconMapPin } from "@tabler/icons-react";
import { Button } from "@mantine/core";

const FormationInfo = [
    {
        program: "Master's degree Applied Computer science, Offshoring",
        institution: "Mohammed V University of Rabat",
        date: "2023 - 2025",
        desc: "Specialized in distributed systems and mobile application development, with a strong focus on microservices architectures and machine learning technologies.",
        link: "http://www.fsr.ac.ma/content/informatique-appliquee-offshoring",
        level: "Master",
        status: "Completed"
    },
    {
        program: "Licence Applied Computer Science and Mathematics",
        institution: "Mohammed V University of Rabat",
        date: "2020 - 2023",
        desc: "Fundamental studies in algorithms, programming, and databases, with practical projects in Java and Python and php.",
        link: "https://www.linkedin.com/school/facult%C3%A9-des-sciences-de-rabat/",
        level: "Licence",
        status: "Completed"
    },
];

const TimelineItemFormation = (items: any) => {
    const size = useMatches({
        xs: 15,
        md: 20,
    });

    return items.map((item: any, index: number) => (
        <Timeline.Item
            data-aos="fade-up"
            data-aos-duration="800"
            key={index}
            className="!pt-12 !mb-2"
            bullet={
                <IconSchool className="!text-bgColor" size={size} />
            }
        >
            <div className="group relative border border-primaryColor/30 bg-gradient-to-br from-bgColor via-bgColor/80 to-bgColor/50 backdrop-blur-sm shadow-xl hover:shadow-[0_10px_40px_0_#64FFDA30] hover:-translate-y-3 transition-all duration-500 ease-out p-8 rounded-2xl sm-mx:p-5 overflow-hidden">
                {/* Effet de brillance animé */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primaryColor/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                {/* Coin décoratif */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primaryColor/5 rounded-bl-full"></div>
                
                <div className="relative z-10">
                    {/* En-tête avec badge de statut */}
                    <div className="flex justify-between items-start gap-4 mb-4 flex-wrap">
                        <div className="flex items-center gap-3">
                            <div className="bg-primaryColor/10 border border-primaryColor/30 rounded-xl p-3">
                                <IconSchool className="text-primaryColor" size={28} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-semibold text-primaryColor uppercase tracking-wider">
                                    {item.level}
                                </span>
                                <span className={`text-xs font-medium mt-0.5 ${
                                    item.status === "Completed" 
                                        ? "text-green-400" 
                                        : "text-yellow-400"
                                }`}>
                                    {item.status}
                                </span>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-2 bg-bgColor/50 border border-primaryColor/20 rounded-lg px-3 py-1.5">
                            <IconCalendar className="text-primaryColor" size={16} />
                            <span className="text-sm font-medium text-textColor">
                                {item.date}
                            </span>
                        </div>
                    </div>

                    {/* Titre du programme */}
                    <h3 className="text-2xl sm-mx:text-xl font-bold text-white mb-3 leading-tight group-hover:text-primaryColor transition-colors duration-300">
                        {item.program}
                    </h3>

                    {/* Institution */}
                    <div className="flex items-center gap-2 mb-4">
                        <IconMapPin className="text-primaryColor" size={18} />
                        <p className="text-base font-semibold text-textColor/80">
                            {item.institution}
                        </p>
                    </div>

                    {/* Séparateur */}
                    <div className="h-px bg-gradient-to-r from-transparent via-primaryColor/30 to-transparent mb-4"></div>

                    {/* Description */}
                    <p className="text-base sm-mx:text-sm text-textColor/90 leading-relaxed mb-6">
                        {item.desc}
                    </p>

                    {/* Points clés (optionnel - peut être ajouté dynamiquement) */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {item.level === "Master" ? (
                            <>
                               <span className="px-3 py-1 bg-primaryColor/10 border border-primaryColor/30 rounded-full text-xs font-medium text-primaryColor">
                                    Software Engineering and Quality
                                </span>
                                <span className="px-3 py-1 bg-primaryColor/10 border border-primaryColor/30 rounded-full text-xs font-medium text-primaryColor">
                                    Distributed Systems
                                </span>
                                <span className="px-3 py-1 bg-primaryColor/10 border border-primaryColor/30 rounded-full text-xs font-medium text-primaryColor">
                                    Security and Network Services
                                </span>
                                <span className="px-3 py-1 bg-primaryColor/10 border border-primaryColor/30 rounded-full text-xs font-medium text-primaryColor">
                                    Mobile and Cloud computing
                                </span>
                                 <span className="px-3 py-1 bg-primaryColor/10 border border-primaryColor/30 rounded-full text-xs font-medium text-primaryColor">
                                    Data Mining and Business Intelligence
                                </span>
                                <span className="px-3 py-1 bg-primaryColor/10 border border-primaryColor/30 rounded-full text-xs font-medium text-primaryColor">
                                    Concurrent Programming in Java
                                </span>
                                 <span className="px-3 py-1 bg-primaryColor/10 border border-primaryColor/30 rounded-full text-xs font-medium text-primaryColor">
                                    Machine Learning
                                </span>
                                <span className="px-3 py-1 bg-primaryColor/10 border border-primaryColor/30 rounded-full text-xs font-medium text-primaryColor">
                                    Internet of Things 
                                </span>
                                <span className="px-3 py-1 bg-primaryColor/10 border border-primaryColor/30 rounded-full text-xs font-medium text-primaryColor">
                                    Mobile Development
                                </span>
                                <span className="px-3 py-1 bg-primaryColor/10 border border-primaryColor/30 rounded-full text-xs font-medium text-primaryColor">
                                    Crypto and Blockchain
                                </span>

                            </>
                        ) : (
                            <>
                                <span className="px-3 py-1 bg-primaryColor/10 border border-primaryColor/30 rounded-full text-xs font-medium text-primaryColor">
                                    Algorithms
                                </span>
                                <span className="px-3 py-1 bg-primaryColor/10 border border-primaryColor/30 rounded-full text-xs font-medium text-primaryColor">
                                    Databases
                                </span>
                                <span className="px-3 py-1 bg-primaryColor/10 border border-primaryColor/30 rounded-full text-xs font-medium text-primaryColor">
                                    Java & Python & JavaScript & PHP & C
                                </span>
                                <span className="px-3 py-1 bg-primaryColor/10 border border-primaryColor/30 rounded-full text-xs font-medium text-primaryColor">
                                    Data Structures
                                </span>
                                 <span className="px-3 py-1 bg-primaryColor/10 border border-primaryColor/30 rounded-full text-xs font-medium text-primaryColor">
                                    UML Design
                                </span>
                            </>
                        )}
                    </div>

                    {/* Bouton d'action */}
                    {item.link && (
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <Button
                                variant="outline"
                                color="#64FFDA"
                                fullWidth
                                radius="md"
                                className="hover:bg-primaryColor/10 hover:scale-[1.02] transition-all duration-300 font-semibold"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    Visit 
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </span>
                            </Button>
                        </a>
                    )}
                </div>
            </div>
        </Timeline.Item>
    ));
};

const Formation = () => {
    const size = useMatches({
        xs: 15,
        md: 20,
    });
    const dot = useMatches({
        xs: 28,
        md: 34,
    });

    return (
        <div
            className="px-16 mx-20 md-mx:px-6 sm-mx:px-2 lg-mx:mx-0 my-10 mb-28 font-mono"
            id="Formation"
        >
            {/* En-tête de section */}
            <div className="text-center mb-16 sm-mx:mb-12">
                <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl font-bold text-white mb-3">
                    <span className="text-primaryColor">05.&nbsp;</span>
                    Academic Journey
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primaryColor to-transparent mx-auto"></div>
                <p className="text-textColor/70 mt-4 text-lg sm-mx:text-base">
                    Educational background and qualifications
                </p>
            </div>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto">
                <Timeline
                    color="#64FFDA"
                    active={FormationInfo.length}
                    bulletSize={dot}
                    lineWidth={3}
                >
                    {TimelineItemFormation(FormationInfo)}
                </Timeline>
            </div>

           
        </div> 
    );
};

export default Formation;