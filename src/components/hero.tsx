import React from "react";
import { Button } from "@heroui/react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import img1 from '../Assests/futuristic-business-scene-with-ultra-modern-ambiance.jpg';
import { Icon } from "@iconify/react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 w-full ">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-background z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary-100 rounded-full filter blur-3xl opacity-20 max-w-[50vw]"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary-100 rounded-full filter blur-3xl opacity-20 max-w-[50vw]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mx-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-2 ">
              <div className="h-1 w-10 bg-primary mt-10"></div>
              <p className="text-primary font-medium mt-10 ">Innovative Software Solutions</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              We Build <span className="text-primary">Digital Products</span> That Power Businesses
            </h1>
            
            <p className="text-foreground-600 text-lg max-w-lg">
              We're a team of experienced developers, designers, and strategists who are passionate about creating exceptional digital experiences that drive business growth.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <Button
                as={HashLink}
                to="#projects"
                color="primary"
                size="lg"
                radius="full"
                className="font-medium px-8"
              >
                View Our Work
              </Button>
              
              <Button
                as={HashLink}
                to="#contact"
                variant="bordered"
                color="primary"
                size="lg"
                radius="full"
                className="font-medium px-8"
              >
                Contact Us
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-8">
              <div className="flex -space-x-2">
                <img src="https://img.heroui.chat/image/avatar?w=48&h=48&u=1" alt="Team member" className="w-10 h-10 rounded-full border-2 border-background" />
                <img src="https://img.heroui.chat/image/avatar?w=48&h=48&u=2" alt="Team member" className="w-10 h-10 rounded-full border-2 border-background" />
                <img src="https://img.heroui.chat/image/avatar?w=48&h=48&u=3" alt="Team member" className="w-10 h-10 rounded-full border-2 border-background" />
                <div className="w-10 h-10 rounded-full bg-primary-100 border-2 border-background flex items-center justify-center">
                  <span className="text-xs font-medium text-primary"></span>
                </div>
              </div>
              <p className="text-sm text-foreground-600">
                <span className="font-semibold">5+ experts</span> ready to help you succeed
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-content1 p-4 rounded-xl shadow-xl">
              <img 
                src= {img1} 
                alt="Dashboard preview" 
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-content1 p-4 rounded-lg shadow-lg z-20">
              <div className="flex items-center gap-3 p-2">
                <div className="w-10 h-10 bg-success-100 rounded-full flex items-center justify-center">
                  <Icon icon="lucide:check" className="text-success" />
                </div>
                <div>
                  <p className="text-sm font-medium">Project Delivered</p>
                  <p className="text-xs text-foreground-500">Ahead of schedule</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-content1 p-4 rounded-lg shadow-lg z-20">
              <div className="flex items-center gap-3 p-2">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <Icon icon="lucide:star" className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Client Satisfaction</p>
                  <p className="text-xs text-foreground-500">98% positive feedback</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
       
      </div>
    </section>
  );
};