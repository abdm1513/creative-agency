import React from "react";
import Header from "../common/Header";
import ServiceCard from "../cards/ServiceCard";

function ServiceSection() {
  const serviceData = [
    {
      id: 0,
      iconUrl: "/images/activity_icon.png",
      title: "Graphic Design",
      description:
        "Transform your ideas into stunning visuals. Our graphic design services create eye-catching materials that engage your audience and enhance your brand identity.",
    },
    {
      id: 1,
      iconUrl: "/images/video_icon.png",
      title: "Video Editing",
      description:
        "Bring your stories to life with our professional video editing services. We craft compelling narratives that captivate your viewers and boost engagement.",
    },
    {
      id: 2,
      iconUrl: "/images/chart_icon.png",
      title: "Digital Marketing",
      description:
        "Maximize your online presence with our digital marketing strategies. We help you reach your target audience and drive growth through data-driven campaigns.",
    },
  
  ];
  return (
    <section className="mt-10">
      <Header title="service" subtitle="What We Offer" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[3.56rem] justify-around mt-8 md:mt-[6.75rem]">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            iconUrl={service.iconUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
