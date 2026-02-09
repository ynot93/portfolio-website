import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Layers, 
  Activity, 
  Smartphone, 
} from 'lucide-react';

const skillCategories = [
  {
    title: "Mobile & Native Systems",
    icon: <Smartphone className="w-6 h-6 text-blue-500" />,
    skills: [
      { name: "Android SDK (Kotlin/Java)", detail: "Lifecycle management, Services, WorkManager" },
      { name: "Windows Development (C#/.NET)", detail: "WPF, WinForms, Win32 API interop" },
      { name: "Native Interop", detail: "JNI (Java Native Interface), NDK basics, C++ bridging" },
      { name: "Jetpack Compose", detail: "Modern reactive UI with state-hoisting" }
    ]
  },
  {
    title: "Backend & Distributed Systems",
    icon: <Layers className="w-6 h-6 text-green-500" />,
    skills: [
      { name: "Java Spring Boot", detail: "Microservices, JPA/Hibernate, Security" },
      { name: "Python (FastAPI / Django)", detail: "Asynchronous I/O, ASGI, RESTful API design" },
      { name: "Node.js / Express", detail: "Event-driven architecture, Middleware design" },
      { name: "Database Engineering", detail: "PostgreSQL, Redis caching, Query optimization" }
    ]
  },
  {
    title: "Performance & Engineering Tooling",
    icon: <Activity className="w-6 h-6 text-red-500" />,
    skills: [
      { name: "Profiling & Debugging", detail: "Android Profiler, WinDbg, Memory leak analysis" },
      { name: "DevOps & CI/CD", detail: "Docker, GitHub Actions, Automated deployment" },
      { name: "Testing Frameworks", detail: "JUnit, Espresso, PyTest, Integration testing" },
      { name: "VCS & Git Flow", detail: "Branching strategies, Rebase, Conflict resolution" }
    ]
  },
  {
    title: "Core Foundations",
    icon: <Cpu className="w-6 h-6 text-purple-500" />,
    skills: [
      { name: "Systems Architecture", detail: "SOLID, Design Patterns, Clean Architecture" },
      { name: "Concurrency", detail: "Multithreading, Coroutines, Race condition mitigation" },
      { name: "Data Structures", detail: "Algorithmic complexity ($O(n)$ analysis), Memory safety" },
      { name: "Networking Protocols", detail: "TCP/UDP, HTTP/3, WebSockets, Low-latency I/O" }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-950 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">
            Technical Proficiency
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit focused on building high-performance, 
            platform-native applications and scalable backend infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-[#0a0a0a] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="group">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 italic">
                      {skill.detail}
                    </p>
                    <div className="mt-2 h-1 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-full opacity-20 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;