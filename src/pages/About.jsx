import React from "react";
import SummaryCard from "../components/about/SummaryCard";
import { education, experience, profile } from "../constant";
import ExperienceCard from "../components/about/ExperienceCard";
import EducationCard from "../components/about/EducationCard";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import ContainerWrapper from "../components/ContainerWrapper";
import OthersCard from "../components/about/OthersCard";

const About = () => {
  return (
    <ContainerWrapper>
      <PageTransition>
        <div className="text-white py-16 flex justify-center">
          <div className="flex flex-col gap-20 w-full max-w-6xl">

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SummaryCard profile={profile} />
            </motion.div>

            {/* Experience + Education */}
            <div className="flex flex-col lg:flex-row gap-10 w-full">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1"
              >
                <ExperienceCard experience={experience} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1"
              >
                <EducationCard education={education} />
              </motion.div>
            </div>

            {/* Others */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <OthersCard />
            </motion.div>

          </div>
        </div>
      </PageTransition>
    </ContainerWrapper>
  );
};

export default About;
