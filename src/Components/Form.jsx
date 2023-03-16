import React, { useState } from "react";

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    industry: "",
    location: "",
    remoteType: "",
    experienceMin: "",
    experienceMax: "",
    salaryMin: "",
    salaryMax: "",
    totalEmp: "",
    applyType: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleNext = () => {
    if (formData.jobTitle && formData.companyName && formData.industry) {
    setStep(2);
    } else {
    alert("Job Title, Company Name and Industry are required!");
    }
   };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("https://6412b2ad772241efb6abeee1.mockapi.io/api/v1/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);

    alert("Job created successfully");
    window.location.href = "./displayjobs";

  };



  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="border-#E6E6E6-700  bg-white w-2/5 rounded-md p-6"
      >
        {step === 1 && (
          <>
            <div className="flex justify-between mb-8">
              <div className="text-[20px] font-medium">Create a job</div>
              <div className="text-[16px] font-medium">Step 1</div>
            </div>
            <label className="text-[14px] font-medium mb-1">Job Title<span className="text-red-600">*</span></label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleInputChange}
              placeholder="ex. UX UI desiner"
              className="border-#E6E6E6-700 border-2 w-full rounded mb-6 p-1 pl-4"
            />
            <label className="text-[14px] mb-1 font-medium">
              Company Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="ex. Google"
              className="border-#E6E6E6-700 border-2 w-full rounded mb-6 p-1 pl-4"
            />
            <label className="text-[14px] mb-1 font-medium">
              Industry<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
              placeholder="ex. Information Technology"
              className="border-#E6E6E6-700 border-2 w-full rounded mb-6 p-1 pl-4"
            />
            <div className="flex justify-between space-x-4">
              <div className="w-1/2">
                <label className="text-[14px] mb-1 font-medium">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="ex. Chennai"
                  className="border-#E6E6E6-700 border-2 mr-2 w-full rounded mb-6 p-1 pl-4"
                />
              </div>
              <div className="w-1/2">
                <label className="text-[14px] mb-1 font-medium">Remote Type</label>
                <input
                  type="text"
                  name="remoteType"
                  value={formData.remoteType}
                  onChange={handleInputChange}
                  placeholder="ex. In-office"
                  className="border-#E6E6E6-700 border-2 w-full rounded mb-6 p-1 pl-4"
                />
              </div>
            </div>
            <br />
            <div className="flex justify-end mt-10">
                <button type="button" onclick="validate()" onClick={handleNext} className="bg-[#1597E4] text-white pr-4 pl-4 pt-2 pb-2 rounded">
                    Next
                </button>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className="flex justify-between mb-8">
              <div className="text-[20px] font-medium">Create a job</div>
              <div className="text-[16px] font-medium">Step 2</div>
            </div>
            <label className="text-[14px] mb-1 font-medium">Experience</label>
            <div className="flex justify-between space-x-4">
                <input
                    type="number"
                    name="experienceMin"
                    value={formData.experienceMin}
                    onChange={handleInputChange}
                    placeholder="Minimun"
                    className="border-#E6E6E6-700 border-2 w-full rounded mb-6 p-1 pl-4"
                    />
                <input
                    type="number"
                    name="experienceMax"
                    value={formData.experienceMax}
                    onChange={handleInputChange}
                    placeholder="Maximum"
                    className="border-#E6E6E6-700 border-2 w-full rounded mb-6 p-1 pl-4"
                    />
            </div>
            <label className="text-[14px] mb-1 font-medium">Salary</label>
            <div className="flex justify-between space-x-4">
                <input
                    type="number"
                    name="salaryMin"
                    value={formData.salaryMin}
                    onChange={handleInputChange}
                    placeholder="Minimum"
                    className="border-#E6E6E6-700 border-2 w-full rounded mb-6 p-1 pl-4"
                />
                <input
                    type="number"
                    name="salaryMax"
                    value={formData.salaryMax}
                    onChange={handleInputChange}
                    placeholder="Maximum"
                    className="border-#E6E6E6-700 border-2 w-full rounded mb-6 p-1 pl-4"
                />
            </div>
            <br />
            <br />
            <label className="text-[14px] mb-1 font-medium">Total Employee</label>
              <input
                type="tel"
                name="totalEmp"
                value={formData.totalEmp}
                onChange={handleInputChange}
                placeholder="ex. 100"
                className="border-#E6E6E6-700 border-2 w-full rounded mb-6 p-1 pl-4"
              />
            <label className="text-[14px] mb-1 font-medium">Apply Type:</label>
            <div className="">
                <label className="text-[14px] mb-1 text-[#7A7A7A] mr-5">
                <input
                    type="radio"
                    name="applyType"
                    value="Quick Apply"
                    checked={formData.applyType === "Quick Apply"}
                    className="h-[14px] w-[14px] mr-2"
                />
                Quick Apply
                </label>
                <label className="text-[14px] mb-1 text-[#7A7A7A]">
                <input
                    type="radio"
                    name="applyType"
                    value="External Apply"
                    checked={formData.applyType === "External Apply"}
                    onChange={handleInputChange}
                    className="h-[14px] w-[14px] mr-2"
                />
                External Apply
                </label>
            </div>
            <div className="flex justify-end mt-10">
                {/* <button type="button" onClick={() => setStep(1)}>Back</button> */}
                <button type="submit" className="bg-[#1597E4] text-white pr-4 pl-4 pt-2 pb-2 rounded">Submit</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default Form;
