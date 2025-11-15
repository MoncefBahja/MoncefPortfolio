import { Text, useMatches } from "@mantine/core";
import { IconBriefcaseFilled } from "@tabler/icons-react";
import { TbCertificate } from "react-icons/tb";
import { CertificatInfo } from "../User";
import { Button } from "@mantine/core";

const CertificateCard = ({ item, index }: any) => {
    return (
        <div 
            data-aos="fade-up" 
            data-aos-duration="800"
            data-aos-delay={index * 100}
            className="group relative border border-primaryColor/30 bg-gradient-to-br from-bgColor to-bgColor/50 backdrop-blur-sm shadow-lg hover:shadow-[0_8px_30px_0_#64FFDA40] hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col gap-3 p-5 rounded-xl overflow-hidden h-full"
        >
            {/* Effet de brillance au survol */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primaryColor/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            
            {/* Icône de certificat */}
            <div className="flex items-center gap-3 relative z-10">
                <div className="bg-primaryColor/10 border border-primaryColor/30 rounded-lg p-2 flex-shrink-0">
                    <TbCertificate className="text-primaryColor" size={24} />
                </div>
                <div className="flex-shrink-0 bg-primaryColor/10 border border-primaryColor/30 rounded-lg px-2.5 py-1">
                    <span className="text-primaryColor text-xs font-semibold">Certified</span>
                </div>
            </div>
            
            {/* En-tête */}
            <div className="flex flex-col gap-1 relative z-10">
                <div className="text-white text-xl font-bold tracking-tight sm-mx:text-lg xs-mx:text-base group-hover:text-primaryColor transition-colors duration-300 line-clamp-2">
                    {item.role}
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-textColor/80 md-mx:text-xs flex-wrap">
                    <span className="text-primaryColor font-semibold">{item.company}</span>
                    <span className="text-textColor/50">•</span>
                    <span>{item.date}</span>
                </div>
            </div>
            
            {/* Séparateur */}
            <div className="h-px bg-gradient-to-r from-transparent via-primaryColor/30 to-transparent"></div>
            
            {/* Description */}
            <div className="text-textColor/90 leading-relaxed text-sm md-mx:text-xs relative z-10 line-clamp-3 flex-grow">
                {item.desc}
            </div>
            
            {/* Bouton d'action */}
            <div className="relative z-10 mt-auto">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                    <Button 
                        variant="outline" 
                        color="#64FFDA" 
                        fullWidth 
                        radius="md"
                        size="sm"
                        className="hover:bg-primaryColor/10 hover:scale-[1.02] transition-all duration-300 font-semibold"
                    >
                        <span className="flex items-center gap-2 text-sm">
                            View Certificate
                            <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </Button>
                </a>
            </div>
        </div>
    );
};

const Certificat = () => {
    return (
        <div className="px-16 mx-20 md-mx:px-6 sm-mx:px-2 lg-mx:mx-0 my-10 mb-28 font-mono" id="Certificate">
            {/* Titre de section amélioré */}
            <div className="text-center mb-12 sm-mx:mb-10">
                <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl font-bold text-white mb-3">
                    <span className="text-primaryColor">04.&nbsp;</span>
                    Certifications
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primaryColor to-transparent mx-auto"></div>
                <p className="text-textColor/70 mt-4 text-lg sm-mx:text-base">
                    Professional achievements and verified credentials
                </p>
            </div>
            
            {/* Grille de certificats - 2 par ligne */}
            <div className="grid grid-cols-2 lg-mx:grid-cols-1 gap-6 md-mx:gap-4 max-w-6xl mx-auto">
                {CertificatInfo.map((item: any, index: number) => (
                    <CertificateCard key={index} item={item} index={index} />
                ))}
            </div>

            {/* Statistiques optionnelles */}
            <div className="mt-12 flex justify-center items-center gap-8 sm-mx:gap-4 flex-wrap">
                <div className="flex items-center gap-2 bg-primaryColor/5 border border-primaryColor/20 rounded-lg px-4 py-2">
                    <TbCertificate className="text-primaryColor" size={20} />
                    <span className="text-white font-semibold text-sm">
                        {CertificatInfo.length} Certifications
                    </span>
                </div>
                <div className="flex items-center gap-2 bg-primaryColor/5 border border-primaryColor/20 rounded-lg px-4 py-2">
                    <IconBriefcaseFilled className="text-primaryColor" size={20} />
                    <span className="text-white font-semibold text-sm">
                        Industry Recognized
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Certificat;