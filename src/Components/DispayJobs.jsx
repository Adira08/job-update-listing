import React, { useState, useEffect } from "react";
import axios from "axios";

const DispayJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://6412b2ad772241efb6abeee1.mockapi.io/api/v1/jobs")
      .then((response) => {
        const sortedJobs = response.data.sort((a, b) =>
          b.id.localeCompare(a.id)
        );
        setJobs(sortedJobs);
        // setJobs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="flex flex-wrap">
        {jobs.map((job) => (          
        <div className="flex w-[45%] m-auto my-8 px-[24px] py-[16px] bg-[#FFFFFF] rounded-md" key={job.id}>
          <div className="w-[50px]">
            <img src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=684&h=456" alt="" className="rounded-md" />
          </div>
          <div className="ml-[10px]">
            <p className="text-xl">{job.jobTitle}</p>
            <p className="">{job.companyName} - {job.industry}</p>
            <p className="mb-[16px] text-[#7A7A7A]">{job.location} ({job.remoteType})</p>
            <p className="mb-[5px]">Part-Time (9.00 am - 5.00 pm IST)</p>
            <p className="mb-[5px]">Experience ({job.experienceMin} - {job.experienceMax} years)</p>
            <p className="mb-[5px]">INR (₹) {job.salaryMin} - {job.salaryMax} / Month</p>
            <p className="mb-[5px]">{job.totalEmp} employees</p>

            <div className="flex-shrink-0 mt-[24px]">
              <button className="bg-[#1597E4] text-white pr-4 pl-4 pt-2 pb-2 rounded mr-[24px]">Apply Now</button>
              <button className="text-[#1597E4] pr-4 pl-4 pt-2 pb-2 rounded border-2 border-[#1597E4]">External Apply</button>
            </div>

          </div>

        </div>
        ))}
      </div>
    </div>
  );
};

export default DispayJobs;
