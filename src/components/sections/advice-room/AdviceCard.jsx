import React from "react";
import BlogCard from "../../common/ui/BlogCard";

import card1 from "../../../assets/images/cardimag1.png"
import card2 from "../../../assets/images/cardimag2.png"
import card3 from "../../../assets/images/cardimag3.jpg"
import card4 from "../../../assets/images/cardimag4.png"
import card5 from "../../../assets/images/cardimag5.png"
import card6 from "../../../assets/images/cardimag6.jpg"
import card7 from "../../../assets/images/cardimag7.png"
import card8 from "../../../assets/images/cardimag8.png"
import card9 from "../../../assets/images/cardimag9.jpg"
















const blogCardsData = [
  {
    image: card1,
    category: "Anxiety",
    title: "How to manage anxiety in daily life",
    description:
      "Discover the psychological and physiological effects of stress and learn practical strategies to reduce anxiety and improve resilience. Seeking support from therapy or counseling can also be beneficial. By adopting healthy coping strategies, you can regain control and reduce anxiety’s impact on your well-being.",
    buttonLink: "/blog/retirement-life",
  },
  {
    image: card2,
    category: "Mental Health",
    title: "How to overcome loneliness and build meaningful connections",
    description:
      "Loneliness can affect anyone. But by reaching out to others, exploring new interests, and seeking professional support, you can develop deeper social bonds. This article explores strategies like joining social groups, volunteering, and developing emotional intelligence to nurture authentic connections.",
    buttonLink: "/blog/retirement-life",
  },
  {
    image:card3,
    category: "Mental Health",
    title: "How sleep affects your mental health",
    description:
      "Quality sleep is essential for emotional regulation, memory, and stress reduction. This article examines how sleep impacts mental wellness and shares practical tips on creating a healthy bedtime routine, managing screen time, and practicing mindfulness to improve your sleep quality.",
    buttonLink: "/blog/retirement-life",
  },
  {
    image: card4,
    category: "Relationships",
    title: "How to rebuild life after a divorce",
    description:
      "Divorce is a major life transition that can leave people feeling lost and overwhelmed. Creating a new life begins with setting small personal goals, seeking support, and practicing self-care. Whether it’s rebuilding your social network, exploring new passions, or developing confidence, rebuilding after divorce is possible by committing to growth.",
    buttonLink: "/blog/retirement-life",
  },
  {
    image:card5,
    category: "Workplace",
    title: "How to cope with workplace burnout",
    description:
      "Burnout is common in high-stress jobs and can impact both your mental and physical health. It happens when stress accumulates without relief. Learn how to recognize burnout symptoms, set boundaries, identify priorities, take breaks, and practice self-care to help prevent burnout.",
    buttonLink: "/blog/retirement-life",
  },
  {
    image: card6,
    category: "Mental Health",
    title: "How military spouses can cope with stress and uncertainty",
    description:
      "Being a military spouse can involve moving frequently, enduring long separations, and dealing with unpredictable routines. Learn ways to build resilience through community support, journaling, self-care, and seeking professional counseling when needed.",
    buttonLink: "/blog/retirement-life",
  },
  {
    image: card7,
    category: "Parenting",
    title: "Parenting a child with special needs",
    description:
      "Parenting a child with special needs can be both rewarding and overwhelming. This article shares strategies for therapy, parent advocacy, school collaboration, and managing emotional health. Discover ways to build a nurturing environment, foster communication, and seek support networks.",
    buttonLink: "/blog/retirement-life",
  },
  {
    image: card8,
    category: "Parenting",
    title: "Helping children manage big emotions",
    description:
      "Children often struggle to express what they’re feeling. Whether it’s through tantrums or withdrawal, recognizing kids’ emotional behaviors is important. Learn how to validate feelings, build emotional vocabulary, teach coping techniques like deep breathing and mindfulness.",
    buttonLink: "/blog/retirement-life",
  },
  {
    image: card9,
    category: "Mental Health",
    title: "Adjusting to Life After Retirement",
    description:
      "Retirement is a life milestone that brings new freedom and challenges. Learn how to adjust to your new routine, set goals, stay socially connected, and find new meaning in this chapter of life. This guide offers insight into purpose, self-discovery, and how to make the transition smoother.",
    buttonLink: "/blog/retirement-life",
  },
];

const AdviceCard = () => {
  return (
    <div className="container mx-auto my-24 ">
      <div className="grid gap-5 sm:gap-8 md:grid-cols-2 xl:grid-cols-3 lg:px-20  xl:px-10">
        {blogCardsData.map((card, index) => (
          <BlogCard
            key={index}
            image={card.image}
            category={card.category}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            buttonLink={card.buttonLink}
          />
        ))}
      </div>
    </div>
  );
};

export default AdviceCard;
