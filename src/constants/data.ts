import {
  MdOutlineRealEstateAgent,} from "react-icons/md";
import { PiHandCoinsFill } from "react-icons/pi";
import { RiHomeHeartLine } from "react-icons/ri";
import { LiaBalanceScaleRightSolid } from "react-icons/lia";
import { GiCrimeSceneTape } from "react-icons/gi";
import { IconType } from "react-icons";

export interface featuresInterface {
  id: number;
  title: string;
  description?: string;
  icon: IconType;
  longDescription?: string;
  keyPoints?: string[];
  image?: string;
}

export interface TeamInterface {
  id: number;
  name: string;
  major: string;
  profile_img: string;
  profile_detail_img: string;
  desc: string;
  practices: string[];
}

export const features: featuresInterface[] = [
  {
    id: 1,
    title: "Real Estate",
    description:
      "At KK & Associates Law, has a nationally-recognized and experienced multi-state real estate practice group consisting of a full range of legal services.",
    icon: MdOutlineRealEstateAgent,
    longDescription: "At KK & Associates Law, we proudly house a nationally recognized and experienced multi-state Real Estate Division that offers a comprehensive range of legal services tailored to your needs. Our commitment to delivering unparalleled representation and advice, rooted in industry knowledge, relationships, and vast experience, has earned us the trust of countless clients over the years.\n\nWhen you partner with KK & Associates Law, you are supported by a business-minded team, prioritizing cost-sensitive measures and innovative litigation techniques. We are dedicated to ensuring your real estate investments remain valued, profitable, and secure under our unwavering representation.",
    keyPoints: [
      // "Assisting clients with a wide spectrum of legal matters.",
      // "Providing legal guidance and representation in diverse areas of law.",
      // "Serving as a one-stop solution for legal concerns in Kenya.",
      // "Advising individuals, businesses, and organizations on legal issues.",
      // "Offering personalized legal strategies tailored to specific needs.",
      // "Handling legal documentation, contracts, and agreements.",
      // "Providing legal advice on business setup and structuring.",
      // "Assisting clients in navigating regulatory compliance and requirements.",
      // "Representing clients in negotiations and dispute resolution.",
      // "Handling legal aspects of property transactions, including leases and sales.",
      // "Advising on employment law matters, including contracts and labor disputes.",
      // "Providing legal insights into family law matters, such as marriage, divorce, and child custody.",
      // "Assisting clients with wills, trusts, and estate planning.",
      // "Offering legal support for criminal defense and civil litigation cases.",
      // "Staying updated with Kenyan laws and regulations to provide accurate advice.",
      // "Striving to achieve positive outcomes and resolutions for our clients."
      "Our Real Estate Practice Group boasts a diverse and extensive background in the industry. Many of our attorneys and paralegals were once underwriters, real estate agents, mortgage servicers, state prosecutors, and title processors. This wealth of practical experience uniquely positions us to provide tailored legal support for even the most complex issues impacting the real estate market. When you turn to us, you gain access to trusted advisors who understand your needs and can precisely navigate the intricate legal landscape.",
      "After successfully completing foreclosures, we guide our clients through the intricate web of federal, state, and municipal requirements to obtain possession of foreclosed properties. We collaborate with property preservation companies, REO brokers, and servicers to facilitate this process. Our services include issuing possession notices and demands and filing eviction actions. Our attorneys are experienced in litigating claims arising from various laws and ordinances"
    ],
    image:
      "https://images.pexels.com/photos/955389/pexels-photo-955389.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  
  
  
  {
    id: 2,
    title: "Probate Litigation, Estate Planning, and Guardianship",
    description:
      "Our highly efficient litigation department deals with a wide range of contentious matters arising from commercial and civil interactions. In particular, the department deals in:",
    icon: PiHandCoinsFill,
    longDescription:
    "Our Probate Litigation, Estate Planning & Guardianship Practice Group attorneys have in-depth knowledge and experience in all aspects of estate planning, guardianship, and probate litigation. Our skilled attorneys are experienced litigators, negotiators, and problem solvers, with substantial experience both in and out of the courtroom.",
    keyPoints: [
      // "Contentious banking and company matters",
      // "Industrial and labour related litigation",
      // "Prosecution and defence of subrogation and other insurance related claims",
      // "Enforcement of securities including mortgages, charges, guarantees, hire purchase contracts and chattels mortgages",
      // "Enforcement of intellectual property rights including patents, trademarks, service marks, copyrights, trade secrets, industrial designs, geographic indications and folklore",
      // "Judicial review and public law litigation",
      // "Contentious commercial transactions",
      // "Consumer protection and professional negligence claims",
      // "Secured and unsecured debt recovery through judicial proceedings",
      // "Prosecution, defence and representation in subrogation and other insurance related claims",
      // "Enforcement of civil rights through prosecution and defence in tortious liability claims",
      "At KK & Associates Law, we understand that no two individuals or families are alike. For this reason, we utilize a personal and individualized approach to thoroughly understand your needs and ensure your goals are met. Every decision we make is with you in mind.",
      "With attorneys that specialize in estate planning, probate litigation, and guardianship, we are able to focus quickly on the issues that matter, identify potential pitfalls ahead of time, and offer innovative solutions to today’s most complex issues. Our expertise and experience provide positive benefits to you as our clients, saving you and your family time, stress, conflict, and expenses.",
      "As a cross-disciplinary law firm, KK & Associates Law is in a unique position to provide complete legal services tailored to each client’s specific needs. While most firms either litigate or draft documents, we can support you in either type of matter. Our attorneys work closely with the firm’s other practice areas, including Family Law, Business Law, and Real Estate, to provide a comprehensive and unified approach to both complex and routine matters.",
      "Our team of knowledgeable attorneys continually seek to leverage resources and minimize risk. We combine broad experience, strategic planning, and innovation to achieve the best possible outcomes for our clients in an efficient, timely, and cost-effective manner.",
      "We understand the sensitive nature of these cases and are here to help guide and support you. We are committed to treating our clients with the attentiveness, responsiveness, and respect you deserve, while providing effective, efficient, and high-quality legal representation.",
      "We aim to handle all probate, estate, and guardianship matters effectively and efficiently. Our Probate Litigation Practice Group attorneys are prepared to represent our clients should the need for litigation arise if a will or trust is contested."
    ],

    image:
      "https://media.istockphoto.com/id/1325676218/photo/business-and-lawyers-discussing-contract-papers-with-brass-scale-on-desk-in-office-law-legal.jpg?b=1&s=612x612&w=0&k=20&c=x11K-36LiJeQcE3f0tho0DOrbbjT3jxoWyPClgcsCvA=",
  },
  {
    id: 3,
    title: "Business Bankruptcy, Insolvency, and Commercial Creditors’ Rights",
    description:
    "Kk’s Business Insolvency, Receivership, and Fiduciary Practice Group provides lenders and other clients with a broad range of business advisory and crisis management services",
    icon: RiHomeHeartLine,
    longDescription:
    "KK’s Business Bankruptcy, Insolvency, and Commercial Creditors’ Rights Division is amongst the most proficient and progressive practices in Florida. We represent parties in commercial bankruptcy matters, receiverships, assignments for the benefit of creditors, and other insolvency and creditors’ rights related litigation.",
    keyPoints: [
      // "Assisting clients in obtaining Work Permits, Visas, Alien Cards, and Residence Permits.",
      // "Providing a streamlined process for end-to-end transactional processing.",
      // "Guiding clients through the complexities of immigration documentation and procedures.",
      // "Advising on contracts for expatriates, including consultancy and employment contracts.",
      // "Offering insights into income tax liability for expatriates in Kenya.",
      // "Preparing citizenship applications for lodging with relevant authorities.",
      // "Assisting clients in applying for citizenship by Marriage.",
      // "Guiding clients through the process of obtaining Citizenship by Long Period of Residence in Kenya.",
      // "Ensuring compliance with immigration laws and regulations.",
      // "Providing personalized solutions for individuals, families, and businesses.",
      // "Offering strategic advice to expatriates seeking legal status in Kenya.",
      // "Striving to achieve successful outcomes in immigration matters.",
      // "Supporting clients in navigating administrative and legal hurdles.",
      // "Staying updated with changes in immigration policies and requirements.",
      // "Serving as a reliable resource for immigration-related inquiries.",
      "Our practice includes representation of:",
  "  . Buyers of Distressed Assets",
  "  . Creditors’ Committees",
  "  . Equity Holders",
  "  . Landlords",
  "  . Lenders and other Secured Creditors",
  "  . Preference and Fraudulent Transfer Defendants",
  "  . Receivers",
  "  . Trustees",
  "  . Unsecured Creditors" ,
  "Our Business Bankruptcy, Insolvency, and Commercial Creditors’ Rights Division provides tough, seamless representation inside and outside the bankruptcy courtroom. We are unwaveringly dedicated to solving problems and reaching successful resolutions, both in and out of court.",
  "When appropriate, our team leverages the firm’s other practice areas, offering a multi-disciplinary approach to provide comprehensive legal advice and more efficient problem solving. Our attorneys periodically collaborate with our Real Estate Division, Commercial Litigation Division, and Financial Services Litigation Division, and other divisions within the firm. Our synergetic approach results in creative, customized, and cost-efficient service. We endeavor to provide practical, informed and streamlined solutions that deliver the best available solutions."
    ],
    image:
    "https://media.istockphoto.com/id/1325676218/photo/business-and-lawyers-discussing-contract-papers-with-brass-scale-on-desk-in-office-law-legal.jpg?b=1&s=612x612&w=0&k=20&c=x11K-36LiJeQcE3f0tho0DOrbbjT3jxoWyPClgcsCvA=",
  },
  {
    id: 4,
    title: "Construction Law",
    description:
      "KK’s experience spans many aspects of the construction industry and our Attorneys understand that the needs of our clients in this industry are complex",
    icon: LiaBalanceScaleRightSolid,
    longDescription:"KK’s experience spans many aspects of the construction industry and our attorneys understand that the needs of our clients in this industry are unique and complex. At  KK & Associates Law, attorneys with differing areas of legal expertise work together to address not only the contractual and litigation needs of our construction industry clients, but also the business, financial, risk management, regulatory, labor and employment, insurance, and workers’ compensation needs.",
    keyPoints: [
      // "Offering expert advice on tax planning, optimization, and compliance.",
      // "Assisting individuals, businesses, and organizations in understanding tax obligations.",
      // "Navigating the ever-changing landscape of tax laws and regulations.",
      // "Advising on various types of taxes, including income tax, corporate tax, VAT, and more.",
      // "Providing insights into tax implications of business transactions and investments.",
      // "Assisting clients in tax registration and obtaining tax identification numbers.",
      // "Handling tax audits, investigations, and disputes with tax authorities.",
      // "Offering legal support in negotiating tax settlements and compromises.",
      // "Assisting multinational companies in managing cross-border tax issues.",
      // "Providing guidance on transfer pricing and international tax planning.",
      // "Advising on tax incentives, exemptions, and reliefs available in the jurisdiction.",
      // "Representing clients in tax appeals and litigation cases.",
      // "Helping clients understand the tax implications of mergers and acquisitions.",
      // "Providing strategies to minimize tax liabilities within legal frameworks.",
      // "Staying updated with tax law developments to provide accurate advice.",
      // "Striving to achieve favorable outcomes and resolutions for our clients.",
      "From project inception to delivery (and beyond), KK's represents all participants in the building process, including design professionals, public and private owners, developers, general contractors, subcontractors, product manufacturers and suppliers, risk insurers, and sureties, involving a wide variety of residential, commercial, and industrial construction projects. KK’s attorneys counsel clients on all aspects of the design and construction process, assisting clients during project development, bidding, contract drafting and negotiation, construction, project close-out, and post-completion claims. Our attorneys are well versed in meeting the complex challenges that face our clients in achieving project completion on time and within budget. Our attorneys include experts in their field who routinely write and lecture on construction law topics through national organizations",
      "Our attorneys strive to reach negotiated solutions in construction disputes whenever possible, but if we cannot achieve our clients’ goals by negotiation, we are fully prepared to proceed through all the stages of civil litigation or arbitration, including mediation, trial and appeals. We pride ourselves in thorough and detailed analysis of cases, often times with the assistance of skilled engineers and other industry experts, so that we know our cases better than our adversaries leading into mediation and trial, maximizing our clients’ recovery or mitigating their potential exposure. Our attorneys have ready access to the full range of resources necessary to assist our clients with any construction problems, both large and small, and pride themselves on knowledgeable and personalized service, always striving to achieve results efficiently and cost-effectively."
    ],
    image: "https://media.istockphoto.com/id/1325676218/photo/business-and-lawyers-discussing-contract-papers-with-brass-scale-on-desk-in-office-law-legal.jpg?b=1&s=612x612&w=0&k=20&c=x11K-36LiJeQcE3f0tho0DOrbbjT3jxoWyPClgcsCvA="
  },
  // {
  //   id: 5,
  //   title: "Conveyancing",
  //   description:
  //     "Injuries and accidents can mean devastation to both individuals and whole families. If you have suffered an injury,",
  //   icon: MdOutlinePersonalInjury,
  //   longDescription:
  //     "KM&CO has a wealth of experience in all aspects of Land Law and Property Transactions, both in Kenya and the larger Eastern Africa Region. Our practice in property law encompasses a wide range of services related to land and property acquisition, management, and disposal...",
  //   keyPoints: [
  //     "Drawing, negotiating, and advising on property-related contracts and transfers.",
  //     "Drafting, executing, and lodging leases, easements, licenses, and Rights of Access.",
  //     "Preparing legal documents for charges, discharges of charges, mortgages, and reconveyances.",
  //     "Assisting in land sub-divisions, changes of land use, and extension of Government Leases.",
  //     "Rectification of Titles and resolving title-related issues.",
  //     "Obtaining necessary consents for land transactions and property development.",
  //     "Handling the payment of land rent and rates on behalf of clients and obtaining clearances.",
  //     "Conducting thorough searches and due diligence on property and land in Kenya and globally.",
  //     "Applying for and lodging caveats, cautions, and prohibitions to safeguard client interests.",
  //     "Advising on and drafting Powers of Attorney for land-related matters.",
  //     "Establishing Trusts and creating trust deeds related to land and property.",
  //     "Assisting in probate and administration of estates of deceased individuals involving land and property.",
  //     "Providing comprehensive advice on all aspects of land and property law.",
  //     "Guiding clients through the legal intricacies of land transactions and property dealings.",
  //     "Ensuring compliance with relevant land laws and regulations.",
  //     "Striving to protect and optimize clients' interests in land and property matters.",
  //   ],
  //   image: "https://madhanilaw.com/file/uploads/2015/04/Conveyancing-1.jpg",
  // },
  {
    id: 6,
    title: "Labor & Employment | Employer Side",
    description:"Our Labor and Employment Law Division provides effective counsel to public and private sector employers",
    icon: GiCrimeSceneTape,
    longDescription:
    "Our Labor and Employment Law Division provides effective counsel to public and private sector employers in the following areas: employment, labor, employee benefits, discrimination, and safety matters. Our clients range from family-owned businesses to some of the largest employers in the nation, including retail, education, manufacturing, construction, hospitals, health care, communications, PEOs, professional services, and transportation corporations.",
    keyPoints: [
      // "Offering legal support to banks, financial institutions, and securities firms.",
      // "Navigating the intricate regulatory framework of banking and commercial securities.",
      // "Advising clients on compliance with banking laws, regulations, and industry standards.",
      // "Assisting in the establishment and licensing of banks and financial institutions.",
      // "Providing insights into lending transactions, loan agreements, and credit facilities.",
      // "Handling documentation and legal aspects of mergers and acquisitions in the financial sector.",
      // "Advising on securitization, structured finance, and capital market transactions.",
      // "Representing clients in negotiations with regulatory authorities and government bodies.",
      // "Assisting in the drafting and review of commercial contracts and agreements.",
      // "Providing legal insights into debt restructuring, insolvency, and bankruptcy proceedings.",
      // "Advising on regulatory compliance for public offerings and private placements.",
      // "Handling disputes and litigation involving banking and commercial securities matters.",
      // "Offering legal guidance on anti-money laundering and anti-fraud measures.",
      // "Providing support in the creation and trading of securities and financial instruments.",
      // "Staying updated with evolving banking regulations and securities laws.",
      // "Striving to achieve favorable resolutions and outcomes for our clients.",
"Our experience covers a wide range of employment matters, including:",
"  . Advising on OFCCP compliance, with representation for investigations;",
"  . Assisting with due diligence and assessments for mergers and acquisitions;",
"  . Claims arising under whistleblower and retaliation statutes;",
"  . Counseling employers on issues ranging from hiring, discipline, leave issues, termination, Americans with Disabilities Act (ADA) compliance, Family and Medical Leave Act (FMLA) compliance, and other employment law issues;",
"  . Defense of matters arising out of the employer-employee relationship;",
"  . Defense of wage and hour issues, including compliance with the overtime and minimum wage requirements of the Fair Labor Standards Act (FLSA) and state wage payment and collection laws;",
"  . Drafting and reviewing employment and severance agreements, non-solicitation and non-compete agreements, and confidentiality agreements;",
"  . Internal audits of employment practices, including policies, exempt/non-exempt classifications, leave programs, and work eligibility (I-9) issues;",
"  . Protecting trade secrets, including the enforcement of protective covenants set forth in non-compete, non-solicitation, and confidentiality agreements;",
"  . Representation during all stages of government audits and litigation; and",
"  . Review of employee handbooks and manuals, substance abuse testing programs (including DOT), electronic communications issues, document retention, and other areas.",
"Our Labor and Employment Law Division assists clients in understanding their complex legal obligations and helps ensure compliance with federal, state, and local laws.",
"We go beyond addressing our clients’ immediate needs. Our team keeps clients informed on current legal issues through regular updates and annual seminars covering diverse labor and employment topics. Additionally, we offer in-house training for human resources (HR) professionals and management, focusing on crucial workplace matters. These include harassment and discrimination prevention, FLSA compliance, handling OSHA investigations, workplace violence, FMLA and ADA regulations, effective discipline strategies, managing terminations, and proper record-keeping practices."
    ],
    image:
      "https://media.istockphoto.com/id/1492189677/photo/bank-symbol-with-with-coins-stack-concepts-of-the-banking-system-rising-interest-rates.webp?b=1&s=612x612&w=0&k=20&c=h73aFRHEIHRSA1BxK49f_8_jbJyypEHuJo4o7vRmpmA=",
  },
  {
    id: 7,
    title: "IT & Law",
    description:"KK’s Data Privacy & Cybersecurity Practice covers a myriad of legal issues relating to privacy and security faced by both internet-based and traditional “brick and mortar” businesses",
    icon: GiCrimeSceneTape,
    longDescription:"KK’s Data Privacy & Cybersecurity Practice covers a myriad of legal issues relating to privacy and security faced by both internet-based and traditional “brick and mortar” businesses. Our Data Privacy & Cybersecurity Practice advises clients regarding the various statutory and regulatory requirements businesses face when handling sensitive information concerning their customers, employees, patients, and affiliates.",
    keyPoints: [
      
      // "Nairobi City County Executive & Assembly",
      // "Isiolo County Executive and Assembly",
      // "Wajir County Executive & Assembly",
      // "Kenya National Housing Coalition",
      // "The East African Caucus on Harm Reduction",
      // "The Voices for Community Action on Drug Policy",
      // "The East African Alcohol Control and Policy Network",
      // "The World Vision - Governance, Education, and Livelihoods Program",
      // "The Economic & Social Rights Centre Hakijamii",
      // "Alcohol Control and Policy Network Kenya",
      "Collectively, the members of KK’s Data Privacy & Cybersecurity Practice have multidisciplinary backgrounds in regulatory compliance, corporate governance and transactions, healthcare, intellectual property rights, complex civil litigation, and technology.",
      "  . Data Breach Prevention, Response, and Litigation",
      "  . Corporate Compliance Programs, including written information security policies, and privacy policies and privacy notices",
      "  . Consumer Protection Laws, including data breach notification statutes, the Fair and Accurate Credit Transactions Act (FACTA), Telephone Consumer Protection Act (TCPA), Gramm-Leach-Bliley Act (GLBA), and the Health Insurance Portability and Accountability Act (HIPAA) as amended by the Health Information Technology for Economic and Clinical Health (HITECH) Act",
      "  . Preparation of social media policies",
      "  . Vendor management and vendor contracts"
     
    ],
    image:
      "https://i.pinimg.com/564x/8e/51/15/8e5115da10fbdb3f4dfb44a6e6b9370a.jpg",
  },
];

export const team: TeamInterface[] = [
  {
    id: 1,
    name: "Kiriba Kariuki",
    major: "Managing Partner",
    profile_img:
      'https://res.cloudinary.com/dsvqxl3uk/image/upload/t_kariuki2/v1738936843/kk.jpg',
      profile_detail_img:'https://res.cloudinary.com/dsvqxl3uk/image/upload/t_kariuki/v1738917836/single_shoots-209_oqihpn.jpg',
    desc: "In his role as the Managing Partner of our distinguished legal firm, Kariuki assumes the pivotal position of Lead Consultant, where he is fully committed to being available for every engagement. His qualifications and extensive experience underscore his significance to our team. Kariuki boasts an impressive educational background, including professional certifications in Policy-Legislative drafting, justiciability, and advocacy from the University of Pretoria, South Africa, as well as program management for development from Humentum in the United States of America. Complementing these certifications, he holds a degree in law from the University of Nairobi, a postgraduate diploma in law from the Kenya School of Law, and a Master’s in Public Policy and Administration from Kenyatta University. With over a decade of professional experience, Kariuki offers not only deep legal expertise but also a profound contextual and technical understanding of the Policy and Legislative landscape in East Africa. His track record includes providing vital technical support to both regional and international partners. His contributions encompass Policy Analysis, reviews of institutional frameworks, and the pioneering of innovative policies and institutional frameworks, both locally and regionally. Kariuki's leadership and dedication are integral to our firm's commitment to excellence and client satisfaction. His unique blend of legal acumen and policy expertise allows us to provide exceptional service and make a positive impact on the legal and policy landscape within East Africa and beyond",
    practices: [
      "Commercial Practice",
      "Litigation",
      "Tax Law",
      "Banking & Finance Service",
      "Immigration Law",
    ],
  },
  {
    id: 2,
    name: "Edwin K Baramao",
    major: "Partner Litigation",
    profile_img:
      "https://res.cloudinary.com/dsvqxl3uk/image/upload/t_kariuki2/v1738936746/edwin23.jpg",
      profile_detail_img:'https://res.cloudinary.com/dsvqxl3uk/image/upload/t_kariuki/v1738923645/Edwin_nhcyy4.jpg',
      desc: "As a Partner and Head of the Litigation & Dispute Resolution Department, Edwin plays a pivotal role in leading our legal team with unparalleled expertise. He brings extensive experience in various areas of legal practice, including Criminal and Civil Litigation, Debt Recovery, Insurance Claims, Employment Disputes, Family and Probate Litigation, and Land Disputes, among others. Edwin is a seasoned Advocate of the High Court of Kenya, a Notary Public, and a Commissioner for Oaths. He holds a Bachelor of Laws Degree from Moi University, a Post Graduate Diploma in Law from the Kenya School of Law, and has honed his legal skills through years of practice in the courtroom and alternative dispute resolution. With a reputation for delivering strategic and effective legal solutions, Edwin’s leadership in the firm ensures exceptional service and client satisfaction. His expertise not only ensures robust representation in high-stakes litigation but also positions him as a trusted advisor in complex disputes across multiple sectors.",
      practices: [
    "Criminal Litigation",
    "Civil Litigation",
    "Debt Recovery",
    "Insurance Claims",
    "Employment & Labor Disputes",
    "Family & Probate Litigation",
    "Land & Property Disputes",
    "Commercial Dispute Resolution",
    "Alternative Dispute Resolution (ADR)"
    ],
  },
  {
    id:3,
    name: "Wangui Kariuki",
    profile_img:
    'https://res.cloudinary.com/dsvqxl3uk/image/upload/t_kariuki2/v1738936570/wangui.jpg',
    profile_detail_img:'https://res.cloudinary.com/dsvqxl3uk/image/upload/t_kariuki/v1738927485/single_shoots-88_vs0cd1.jpg',
    major: "Partner, Conveyancing & Construction Law",
    desc: "A highly skilled Commercial and Real Estate Advocate with over nine years of expertise, Wangui Kariuki is a trusted legal professional renowned for her deep understanding of conveyancing, construction law, and commercial transactions. With a strong passion for institutional development, she is dedicated to providing legal services that not only meet but consistently exceed client expectations. She specializes in delivering tangible results through proactive legal strategies, meticulous contract drafting, and cross-functional collaboration with stakeholders in real estate, infrastructure, and corporate sectors. Wangui’s extensive experience allows her to navigate complex legal frameworks with precision while fostering strong partnerships with like-minded professionals. Her ability to anticipate potential legal challenges, mitigate risks, and craft strategic solutions ensures her clients receive well-rounded, effective legal representation. Wangui thrives in dynamic environments that require independent problem-solving and strategic thinking, yet she also excels in collaborative team-based efforts to achieve shared goals. Her expertise spans high-value property transactions, construction agreements, regulatory compliance, and institutional policy formulation. Through her unwavering commitment to excellence and innovation, Wangui continues to shape the legal landscape in conveyancing, construction law, and commercial practice, ensuring success for clients and stakeholders alike.",
    practices: [
      "Conveyancing & Property Law",
      "Construction Law",
      "Real Estate Transactions",
      "Commercial Contracts & Negotiations",
      "Infrastructure & Development Law",
      "Regulatory Compliance",
      "Land Use Planning & Zoning",
      "Corporate & Commercial Advisory",
      "Institutional Policy & Development",
      "Risk Management & Dispute Resolution"
    ]
  }
  ,
  {
    id: 4,
    name: "Otieno Okello",
    major: "Civil & Criminal Litigation Advocate",
    profile_img:
    'https://res.cloudinary.com/dsvqxl3uk/image/upload/t_kariuki2/v1738936476/ot2.jpg',
    profile_detail_img:'https://res.cloudinary.com/dsvqxl3uk/image/upload/t_kariuki/v1738928935/single_shoots-104_ilixhl.jpg',
    desc: "Otieno Okello is a principled and self-driven lawyer with a deep passion for civil and criminal litigation. He is dedicated to promoting justice and upholding the rule of law with unwavering integrity. His strong belief in the power of teamwork allows him to collaborate effectively to achieve meaningful legal outcomes. With a keen sense of fairness and a commitment to ethical legal practice, Willis actively seeks to make a positive impact on society through advocacy and litigation. His strong leadership foundation, combined with exceptional problem-solving and decision-making skills, enables him to navigate complex legal disputes with precision. He is a valuable asset to any legal team, offering strategic insights and practical solutions that ensure the best possible outcomes for his clients. Whether in the courtroom or through alternative dispute resolution, Willis remains steadfast in his pursuit of justice, advocating for his clients with dedication and professionalism.",
    practices: [
      "Civil Litigation",
      "Criminal Litigation",
      "Human Rights Law",
      "Constitutional Law",
      "Dispute Resolution",
      "Employment & Labor Law",
      "Corporate & Commercial Litigation",
      "Administrative & Public Law",
      "Alternative Dispute Resolution (ADR)"
    ]
  },
  {
    id: 5,
    name: "Doreen Nyaruai",
    major: "Business Development Manager",
    profile_img:
      "https://res.cloudinary.com/dsvqxl3uk/image/upload/t_kariuki2/v1738931792/single_shoots-146_fi3gnh.jpg",
      profile_detail_img:'https://res.cloudinary.com/dsvqxl3uk/image/upload/t_kariuki/v1738941547/single_shoots-146_qzuevi.jpg',
    desc: "Nyaruai  plays a pivotal role in driving business growth and expanding market opportunities within the firm. With extensive experience in identifying new business prospects, she is highly skilled at building strong client relationships and developing innovative strategies that align with the firm's long-term vision. Her expertise lies in market analysis, strategic planning, and fostering sustainable partnerships that drive revenue and corporate expansion. Sophia works collaboratively across departments to ensure seamless execution of business initiatives, leveraging her keen insights to identify emerging industry trends and capitalize on new opportunities. She is deeply committed to innovation, operational efficiency, and delivering exceptional value to both clients and stakeholders. Her leadership and ability to navigate complex business landscapes make her an invaluable asset to the firm's continued success.",
    practices: [
      "Business Development Strategy",
      "Market Analysis & Expansion",
      "Client Relationship Management",
      "Strategic Planning",
      "Corporate Growth & Partnerships",
      "Revenue Generation & Financial Strategy",
      "Industry Trend Analysis",
      "Operational Efficiency & Innovation"
    ]
  },
  {
    id: 6, 
    name: "Shweta Patel Mukesh",
    major: "Lawyer",
    profile_img:
      "https://res.cloudinary.com/dsvqxl3uk/image/upload/t_kariuki2/v1738936330/junior2.jpg",
      profile_detail_img:'https://res.cloudinary.com/dsvqxl3uk/image/upload/t_kariuki/v1738932474/single_shoots-137_gehddf.jpg',
    desc: "Shweta Patel Mukesh is a dedicated and detail-oriented junior lawyer with a strong foundation in legal principles and litigation. A graduate of Strathmore Law School, she has developed a solid academic background, complemented by hands-on experience gained through internships at reputable law firms. Her passion for the legal profession is evident in her meticulous approach to case analysis, research, and client representation. Shweta is committed to delivering thoughtful, ethical, and effective legal solutions tailored to the needs of her clients. She has experience across multiple legal areas, including corporate and commercial law, alternative dispute resolution, and conveyancing. With a keen interest in dispute resolution mechanisms, she actively seeks to refine her skills in negotiations, contract drafting, and compliance advisory. Her ability to navigate complex legal frameworks and her dedication to continuous learning make her a valuable asset to the legal team.",
    practices: [
      "Corporate & Commercial Law",
      "Litigation",
      "Alternative Dispute Resolution (ADR)",
      "Conveyancing & Property Law",
      "Contract Drafting & Negotiation",
      "Legal Research & Compliance Advisory"
    ]
  },
  {
    id: 7,
    name: "Mark Muriu",
    major: "Accountant",
    profile_img:
      "https://res.cloudinary.com/dsvqxl3uk/image/upload/t_kariuki2/v1738937972/acc9.jpg",
      profile_detail_img:'https://res.cloudinary.com/dsvqxl3uk/image/upload/t_kariuki/v1738935175/single_shoots-160_pxrl3f.jpg',
    desc: "Mark Muriu is a dedicated finance professional with extensive experience in accounts payable, bookkeeping, and financial analysis. He plays a crucial role in ensuring the accuracy, efficiency, and compliance of financial reporting within the firm. With a keen eye for detail and a deep understanding of financial principles, Mark is committed to maintaining the highest standards of financial integrity. His expertise extends beyond routine accounting tasks, as he actively contributes to budgeting, cash flow management, and strategic financial planning. By streamlining financial operations and ensuring compliance with regulatory frameworks, Mark helps the firm achieve its long-term financial objectives. His proficiency in financial software and reporting tools further enhances his ability to provide insightful financial analysis, making him an invaluable asset to the firm’s financial management team.",
    practices: [
      "Accounts Payable & Receivable",
      "Bookkeeping & Financial Records Management",
      "Financial Reporting & Analysis",
      "Budgeting & Cash Flow Management",
      "Regulatory Compliance & Taxation",
      "Strategic Financial Planning"
    ]
  },
  {
    id: 8,
    name: "Samuel Githehu",
    major: "Liaison Manager",
    profile_img: "https://res.cloudinary.com/dsvqxl3uk/image/upload/t_kariuki2/v1738937731/sam.jpg",
    profile_detail_img:'https://res.cloudinary.com/dsvqxl3uk/image/upload/t_kariuki/v1738937696/single_shoots-175_x8xbv3.jpg',
    desc: "Samuel Githehu is a dynamic Liaison Manager at KK & Associates, bringing a wealth of experience in Industrial Automation and IT support. His expertise lies in optimizing processes, fostering strong client relationships, and ensuring seamless communication between teams and stakeholders. With a keen eye for detail and a results-driven approach, Samuel plays a crucial role in enhancing operational efficiency and driving business success. His ability to bridge technical and administrative functions allows him to effectively align company objectives with client needs. Passionate about problem-solving and continuous improvement, Samuel is instrumental in facilitating smooth workflows, resolving challenges, and maintaining the highest standards of professionalism within the firm.",
    practices: [
      "Industrial Automation",
      "IT Support & System Optimization",
      "Process Streamlining",
      "Client Relations & Stakeholder Engagement",
      "Operational Efficiency & Workflow Management",
      "Strategic Communication & Liaison Services"
    ]
  }
,  
  {
    id: 9,
    name: "Salma Swaleh",
    major: "Administrative Manager",
    profile_img: "https://res.cloudinary.com/dsvqxl3uk/image/upload/t_kariuki2/v1738937560/salma3.jpg",
    profile_detail_img:'https://res.cloudinary.com/dsvqxl3uk/image/upload/t_kariuki/v1738937512/single_shoots-115_osnpf5.jpg',
    desc: "Salma Swaleh is an accomplished Administrative Manager with a strong background in hospitality management, which she seamlessly integrates into her role to ensure operational efficiency and exceptional client service. With extensive experience in office administration, resource management, and team coordination, she plays a pivotal role in streamlining daily operations and optimizing workflows. Salma excels in managing budgets, scheduling, and fostering a collaborative work environment that enhances productivity and service delivery. Her keen attention to detail, problem-solving skills, and ability to anticipate organizational needs make her an invaluable asset to the firm. Dedicated to maintaining ethical standards and continuous improvement, Salma ensures that the administrative functions align with the firm's broader strategic goals, ultimately contributing to a well-structured and client-focused legal practice.",
    practices: [
      "Office Administration & Management",
      "Workflow Optimization",
      "Budgeting & Resource Allocation",
      "Team Coordination & Leadership",
      "Client Relations & Service Excellence",
      "Strategic Planning & Operational Efficiency"
    ]
  },
  {
    id: 11,
    name: "Simon Mwangi Mungai",
    major: "Partner, Corporate & Commercial Law",
    profile_img: "URL_HERE",
    profile_detail_img:'',
    desc: "Simon Mwangi Mungai is an accomplished Advocate of the High Court of Kenya with expertise in corporate and commercial law, litigation, family law, and conveyancing. Holding both an LL.B and LL.M from the University of Nairobi, he is also a Certified Secretary (CS) with over three years of distinguished legal practice. Beyond private practice, Simon actively contributes to global legal reforms as a consultant for the United Nations Office on Drugs and Crime (UNODC), spearheading anti-corruption initiatives and championing global integrity education. As the founder of the Start-Up Initiative, a grant supported by the U.S. Embassy in Nairobi, he empowers emerging businesses and entrepreneurs to embrace ethical governance and sustainable practices. His commitment to integrity, governance, and client-centered solutions underpins his legal approach, ensuring strategic and effective representation for individuals and businesses alike.",
    practices: [
      "Corporate & Commercial Law",
      "Litigation",
      "Family Law",
      "Conveyancing",
      "Anti-Corruption & Governance",
      "Ethical Business Advisory",
      "Start-Up & Entrepreneurship Legal Support"
    ]
  }
  
  
];
