import { useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-gray-50 p-6">
      <dt className="grid grid-cols-12 cursor-pointer" onClick={onClick}>
        <p className="font-semibold text-lg col-span-11">{question}</p>
        <div className="col-span-1 flex items-center justify-center">
          <RiArrowUpSLine
            className={
              isOpen
                ? "rotate-0 size-7 "
                : "-rotate-180 transition-transform size-7"
            }
          />
        </div>
      </dt>
      {isOpen && (
        <dd className="text-lg font-light mt-6">
          <p>{answer}</p>
        </dd>
      )}
    </div>
  );
}

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "Is pest control safe for children? I am pregnant and want to know if pest control can cause any harm to me or my child? Is pest control safe for my elderly parents? Will it harm my pets?",

      answer: `We use products approved for use by the Central Insecticides Board of the government of India for use at households. Besides using the correct dosage and targeted delivery at the right place makes pest control perfectly safe for all humans including small children, pregnant women, elderly people, and domestic pets`,
    },
    {
      question:
        "Will pest control be a messy affair? Do I have to move all household stuff during pest control? Do I have to be away from my home for 1-2 days after pest control?",
      answer: `We now treat cockroaches and ants by specialized gels which contain insecticides specific to those pests. Unlike in the past, we do not spray foul smelling insecticides that used to cause a mess in the house after pest treatment. There is no need to empty the drawers and cover up the food. It is also not necessary to close the house and go away. Your family can continue with its routine activities such as cooking, eating, or watching TV during this treatment
We apply minute quantities of gel in strategic but inconspicuous locations around the kitchen and the rest of your home. Cockroaches and ants are attracted to the gel eat it and die.`,
    },
    {
      question:
        "I use household insect repellent products and insecticcide, then why pest control?",
      answer:
        "Cockroaches, bed bugs, ants and other domestic pests thrive around homes. Though unclean conditions increase their numbers, pest’s dependence on people for food and will still exist in the cleanest of premises. Pests can be repulsive, cause carrying disease causing germs on their body and contaminate food. They also interfere with personal comfort and can cause social embarrassment. Your efforts at eliminating these pests can be ineffective and time consuming and the repellents and insecticides you use give lasting results. PECOPP’s pest control treatments thoroughly and efficiently treat pests to prevent recurrence.",
    },
    {
      question: `My local pest control agency promises herbal treatment using boric powder. Is it safe and effective?`,
      answer: `Use of boric powder mixed with flour for cockroaches is certainly not herbal as its ingredients are of industrial origin. By and large it is found to be less effective compared to the gel baiting treatment we do for cockroaches.`,
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div
      id="faq"
      className="px-6 py-12 max-w-7xl mt-3 mx-auto lg:px-8 lg:mt-10"
    >
      <h2 className="h2-style">FAQs</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start ">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Accordion;
