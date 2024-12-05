import { Timeline, useMatches } from "@mantine/core";
import { IconSchool } from "@tabler/icons-react";
import { Button } from "@mantine/core";

const FormationInfo = [
    {
        program: "Master's degree Applied Computer science, Offshoring",
        institution: "Mohammed V University of Rabat",
        date: "2023 - 2025",
        desc: "Spécialisation en systèmes distribués et intelligence artificielle, avec une focalisation sur les architectures microservices et l'apprentissage automatique.",
        link: "https://www.linkedin.com/school/facult%C3%A9-des-sciences-de-rabat/",
    },
    {
        program: "Licence Applied Computer Science and Mathematics",
        institution: "Mohammed V University of Rabat",
        date: "2020 - 2023",
        desc: "Études fondamentales en algorithmique, programmation, et bases de données, avec des projets pratiques en Java et Python.",
        link: "https://www.linkedin.com/school/facult%C3%A9-des-sciences-de-rabat/",
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
            bullet={
                <IconSchool className="!text-bgColor" size={size} />
            }
        >
            <div className="border border-primaryColor shadow-[0_0_10px_0_#64FFDA50] hover:-translate-y-2 transition-transform duration-300 ease-in-out p-6 rounded-lg">
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-white">{item.program}</h3>
                    <p className="text-lg font-semibold text-textColor">
                        {item.institution} &#x2022; {item.date}
                    </p>
                </div>
                <p className="mt-2 text-base text-textColor leading-relaxed">
                    {item.desc}
                </p>
                {item.link && (
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 block"
                    >
                        <Button
                            variant="outline"
                            color="#0969da"
                            fullWidth
                            radius="md"
                        >
                            Show
                        </Button>
                    </a>
                )}
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
        xs: 25,
        md: 30,
    });

    return (
        <div
            className="px-16 mx-auto max-w-5xl my-10 mb-28 font-mono"
            id="Formation"
        >
            <h1 className="text-4xl sm:text-3xl xs:text-2xl mb-12 font-bold text-center text-white">
                <span className="text-primaryColor">05.&nbsp;</span>Formation
            </h1>
            <Timeline
                color="#0969da"
                active={FormationInfo.length}
                bulletSize={dot}
                lineWidth={2}
            >
                {TimelineItemFormation(FormationInfo)}
            </Timeline>
        </div>
    );
};

export default Formation;
