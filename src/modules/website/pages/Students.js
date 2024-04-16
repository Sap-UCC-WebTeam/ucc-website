

import React, { useState } from 'react';
import studentData from './studentData';

const JobCard = ({ job }) => {
  const { company, logo, isNew, featured, position, role, level, postedAt, contract, location, languages, tools } = job;

  return (
    <div className="bg-white rounded-md shadow-lg p-6 mb-4">
      <div className="flex items-center mb-4">
        <img src={logo} alt={company} className="w-12 h-12 mr-4" />
        <div>
          <h2 className="text-lg font-bold">{company}</h2>
          {isNew && <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold uppercase mr-2">New!</span>}
          {featured && <span className="bg-gray-800 text-white px-2 py-1 rounded-full text-xs font-semibold uppercase">Featured</span>}
        </div>
      </div>
      <h3 className="text-lg font-bold mb-2 text-gray-900">{position}</h3>
      <p className="text-gray-600">{`${role} • ${level}`}</p>
      <p className="text-gray-600">{postedAt} • {contract} • {location}</p>
      <div className="flex mt-4">
        {languages.map((language, index) => (

          <span key={index} className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md text-sm mr-2">{language}</span>

        ))}
        {tools.map((tool, index) => (

          <span key={index} className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md text-sm">{tool}</span>

        ))}
      </div>
    </div>
  );
};

const CareersPage = () => {
  const [filters, setFilters] = useState({
    location: '',
    level: '',
    skills: [],
  });

  const handleLocationChange = (event) => {
    setFilters({ ...filters, location: event.target.value });
  };

  const handleLevelChange = (event) => {
    setFilters({ ...filters, level: event.target.value });
  };

  const handleSkillChange = (event) => {
    const skill = event.target.value;
    if (filters.skills.includes(skill)) {
      setFilters({ ...filters, skills: filters.skills.filter(s => s !== skill) });
    } else {
      setFilters({ ...filters, skills: [...filters.skills, skill] });
    }
  };

  const filteredJobs = studentData.filter(job => {
    const locationMatch = !filters.location || job.location === filters.location;
    const levelMatch = !filters.level || job.level === filters.level;
    const skillsMatch = filters.skills.length === 0 || filters.skills.every(skill => job.languages.includes(skill) || job.tools.includes(skill));
    return locationMatch && levelMatch && skillsMatch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/4 pr-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">Filter by Location</h2>
          <select className="border rounded-md px-2 py-1 w-full mb-4" value={filters.location} onChange={handleLocationChange}>
            <option value="">All Locations</option>
            <option value="USA Only">USA Only</option>
            <option value="UK Only">UK Only</option>
            {/* Add more location options as needed */}
          </select>
          <h2 className="text-lg font-semibold mb-2">Filter by Experience Level</h2>
          <select className="border rounded-md px-2 py-1 w-full mb-4" value={filters.level} onChange={handleLevelChange}>
            <option value="">All Levels</option>
            <option value="Junior">Junior</option>
            <option value="Midweight">Midweight</option>
            <option value="Senior">Senior</option>
            {/* Add more experience level options as needed */}
          </select>
          <h2 className="text-lg font-semibold mb-2">Filter by Skills</h2>
          <div className="flex flex-wrap">
            <label className="mr-4 mb-2"><input type="checkbox" value="HTML" checked={filters.skills.includes('HTML')} onChange={handleSkillChange} className="mr-2" />HTML</label>
            <label className="mr-4 mb-2"><input type="checkbox" value="CSS" checked={filters.skills.includes('CSS')} onChange={handleSkillChange} className="mr-2" />CSS</label>
            <label className="mr-4 mb-2"><input type="checkbox" value="JavaScript" checked={filters.skills.includes('JavaScript')} onChange={handleSkillChange} className="mr-2" />JavaScript</label>
            <label className="mr-4 mb-2"><input type="checkbox" value="React" checked={filters.skills.includes('React')} onChange={handleSkillChange} className="mr-2" />React</label>
            <label className="mr-4 mb-2"><input type="checkbox" value="Sass" checked={filters.skills.includes('Sass')} onChange={handleSkillChange} className="mr-2" />Sass</label>
            {/* Add more skill checkboxes as needed */}
          </div>
        </div>
        <div className="w-full md:w-3/4">
          <h1 className="text-3xl font-bold mb-8">Join Our Team</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;


