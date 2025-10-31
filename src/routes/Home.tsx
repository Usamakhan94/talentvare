import JobsPosted from "@/components/sections/Home/jobsPosted";
import SearchForm from "@/components/sections/Home/searchForm";
import UserDetails from "@/components/sections/Home/UserDetails";
import UserProfileBg from "@/assets/images/details-bg.png";
import UserAvatarBig from "@/assets/images/avatar-big.png";
import TeamIcon from "@/assets/images/teams-logo.png";

const Home = () => {
  const userProfile = {
    profileBg: UserProfileBg,
    profilePic: UserAvatarBig,
    userName: "Albert Flores",
    userDetails:
      "Senior Product Designer | UI/UX Designer | Graphic Designer | Web...",
    userLocation: "Clinton, Maryland",
    visitor: 140,
    viewers: 20,
    jobs: 88,
  };

  const featuredJobs = [
    {
      designation: "UI/UX Designer",
      companyName: "Teams",
      location: "Seattle, USA (Remote)",
      posted: 1,
      applicants: 22,
      featured: true,
      companyIcon: TeamIcon,
    },
    {
      designation: "UI/UX Designer",
      companyName: "Teams",
      location: "Seattle, USA (Remote)",
      posted: 1,
      applicants: 22,
      featured: true,
      companyIcon: TeamIcon,
    },
    {
      designation: "UI/UX Designer",
      companyName: "Teams",
      location: "Seattle, USA (Remote)",
      posted: 2,
      applicants: 22,
      featured: true,
      companyIcon: TeamIcon,
    },
    {
      designation: "UI/UX Designer",
      companyName: "Teams",
      location: "Seattle, USA (Remote)",
      posted: 1,
      applicants: 22,
      featured: true,
      companyIcon: TeamIcon,
    },
    {
      designation: "UI/UX Designer",
      companyName: "Teams",
      location: "Seattle, USA (Remote)",
      posted: 1,
      applicants: 1,
      featured: true,
      companyIcon: TeamIcon,
    },
  ];

  const recommendedJobs = [
    {
      designation: "UI/UX Designer",
      companyName: "Teams",
      location: "Seattle, USA (Remote)",
      posted: 1,
      applicants: 22,
      featured: false,
      companyIcon: TeamIcon,
    },
    {
      designation: "UI/UX Designer",
      companyName: "Teams",
      location: "Seattle, USA (Remote)",
      posted: 1,
      applicants: 22,
      featured: false,
      companyIcon: TeamIcon,
    },
    {
      designation: "UI/UX Designer",
      companyName: "Teams",
      location: "Seattle, USA (Remote)",
      posted: 2,
      applicants: 22,
      featured: false,
      companyIcon: TeamIcon,
    },
    {
      designation: "UI/UX Designer",
      companyName: "Teams",
      location: "Seattle, USA (Remote)",
      posted: 1,
      applicants: 22,
      featured: false,
      companyIcon: TeamIcon,
    },
    {
      designation: "UI/UX Designer",
      companyName: "Teams",
      location: "Seattle, USA (Remote)",
      posted: 1,
      applicants: 1,
      featured: false,
      companyIcon: TeamIcon,
    },
    {
      designation: "UI/UX Designer",
      companyName: "Teams",
      location: "Seattle, USA (Remote)",
      posted: 1,
      applicants: 1,
      featured: false,
      companyIcon: TeamIcon,
    },
    {
      designation: "UI/UX Designer",
      companyName: "Teams",
      location: "Seattle, USA (Remote)",
      posted: 1,
      applicants: 1,
      featured: false,
      companyIcon: TeamIcon,
    },
    {
      designation: "UI/UX Designer",
      companyName: "Teams",
      location: "Seattle, USA (Remote)",
      posted: 1,
      applicants: 1,
      featured: false,
      companyIcon: TeamIcon,
    },
    {
      designation: "UI/UX Designer",
      companyName: "Teams",
      location: "Seattle, USA (Remote)",
      posted: 1,
      applicants: 1,
      featured: false,
      companyIcon: TeamIcon,
    },
    {
      designation: "UI/UX Designer",
      companyName: "Teams",
      location: "Seattle, USA (Remote)",
      posted: 1,
      applicants: 1,
      featured: false,
      companyIcon: TeamIcon,
    },
  ];
  return (
    <div className="container pt-6.25">
      <div className="grid lg:grid-cols-12 xl:gap-6 gap-5 min-w-0 relative">
        <div className="lg:col-span-3 min-w-0">
          <UserDetails userData={userProfile} />
        </div>
        <div className="lg:col-span-9 md:pt-3.5 min-w-0">
          <SearchForm />
          <div className="flex flex-col gap-6.25 pt-4 w-full min-w-0">
            <JobsPosted
              jobsListing={featuredJobs}
              title={"Featured Jobs"}
              navigateTo={""}
            />
            <JobsPosted
              jobsListing={recommendedJobs}
              title={"Recommended Jobs"}
              navigateTo={""}
            />
            <JobsPosted
              jobsListing={recommendedJobs}
              title={"Latest Jobs"}
              navigateTo={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
