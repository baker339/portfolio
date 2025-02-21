import { useState, useRef } from "react";
// import { useEffect } from "react";
import { motion } from "framer-motion";
import { skills, experience, projects } from "@/data/data";

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState<"all" | "languages" | "frameworks" | "technologies">("all");

    const filteredSkills =
        selectedCategory === "all"
            ? [...skills.languages, ...skills.frameworks, ...skills.technologies]
            : skills[selectedCategory];

    const experienceScrollRef = useRef<HTMLDivElement | null>(null);
    const projectsScrollRef = useRef<HTMLDivElement | null>(null);

    // useEffect(() => {
    //     const centerFirstCard = (scrollRef: React.RefObject<HTMLDivElement | null>) => {
    //         if (scrollRef.current) {
    //             const firstCard = scrollRef.current.children[0] as HTMLElement;
    //             firstCard.scrollIntoView({ behavior: "instant", block: "nearest", inline: "center" });
    //         }
    //     };
    //
    //     centerFirstCard(experienceScrollRef);
    //     centerFirstCard(projectsScrollRef);
    // }, []);

    return (
        <div className="scroll-container bg-background text-textPrimary">
            {/* Hero Section */}
            <section className="scroll-section flex flex-col justify-center items-center text-center">
                {/* Profile Image */}
                <div className="w-32 h-32 mb-4">
                    <img
                        src="/profile.jpg"
                        alt="Aidan Baker"
                        className="rounded-full border-4 border-primary shadow-lg w-full h-full object-cover"
                    />
                </div>

                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl font-bold text-primary"
                >
                    Aidan Baker
                </motion.h1>
                <p className="mt-2 text-lg text-textSecondary">Senior Full Stack Developer</p>
                <p className="mt-2 text-lg text-textSecondary">aidanbaker.ab@gmail.com</p>

                {/* Navigation Buttons */}
                <nav className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                    {["Education", "Skills", "Experience", "Projects"].map((section) => (
                        <a
                            key={section}
                            href={`#${section.toLowerCase()}`}
                            className="px-4 py-2 bg-secondary text-white font-semibold rounded-lg shadow-md transition transform hover:scale-105"
                        >
                            {section}
                        </a>
                    ))}
                </nav>
            </section>

            {/* Education Section */}
            <section id="education" className="scroll-section bg-white flex items-center justify-center text-center">
                <motion.div className="max-w-4xl">
                    <h2 className="text-4xl font-bold text-primary mb-6">Education</h2>
                    <p className="mt-2 text-textSecondary"><strong>Purdue University</strong> - B.S. Industrial Engineering</p>
                </motion.div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="scroll-section bg-white flex flex-col items-center text-center px-4">
                <motion.div className="max-w-4xl w-full">
                    <h2 className="text-4xl font-bold text-primary mb-6">Technical Skills</h2>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {["All", "Languages", "Frameworks", "Technologies"].map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category.toLowerCase() as "all" | "languages" | "frameworks" | "technologies")}
                                className={`px-4 py-2 rounded-lg font-semibold shadow-md transition-all ${
                                    selectedCategory === category.toLowerCase()
                                        ? "bg-primary text-white"
                                        : "bg-gray-200 text-textPrimary hover:bg-gray-300"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-textSecondary">
                        {filteredSkills.map((skill) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="bg-gray-200 px-3 py-1 rounded-md shadow-md text-sm md:text-base"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="scroll-section bg-white flex items-center justify-center text-center">
                <motion.div className="max-w-6xl w-full">
                    <h2 className="text-4xl font-bold text-primary mb-6">Experience</h2>
                    <p className="text-gray-500 italic mb-4">Swipe to see more</p>
                    <div ref={experienceScrollRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-10 py-6 space-x-6">
                        {experience.map((job, index) => (
                            <motion.div
                                key={index}
                                className="snap-center flex-shrink-0 bg-gray-100 p-6 rounded-lg w-[80vw] max-w-[500px] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-semibold">{job.company} ({job.role})</h3>
                                <p className="text-gray-500">{job.duration}</p>
                                <ul className="list-disc ml-5 mt-2 text-textPrimary text-left">
                                    {job.responsibilities.map((task, idx) => (
                                        <li key={idx}>{task}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="scroll-section bg-white flex items-center justify-center text-center">
                <motion.div className="max-w-6xl w-full">
                    <h2 className="text-4xl font-bold text-primary mb-6">Projects</h2>
                    <p className="text-gray-500 italic mb-4">Swipe to see more</p>
                    <div ref={projectsScrollRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-10 py-6 space-x-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="snap-center flex-shrink-0 bg-gray-100 p-6 rounded-lg w-[80vw] max-w-[500px] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-semibold">{project.name}</h3>
                                <p className="text-gray-600 mt-2">{project.description}</p>
                                <p className="text-gray-500 mt-1">Tech: {project.tech}</p>
                                <div className="mt-4 flex space-x-4 justify-center">
                                    <a href={project.website} className="text-accent underline">Website</a>
                                    <a href={project.github} className="text-secondary underline">GitHub</a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
            {/* Footer Section */}
            <footer className="bg-gray-100 text-center py-6 mt-12">
                <p className="text-gray-500">&copy; {new Date().getFullYear()} Aidan Baker. All rights reserved.</p>
            </footer>
        </div>
    );
}