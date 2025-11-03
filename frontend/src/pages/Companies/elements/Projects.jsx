"use client"
import { useState } from "react"
import { projectsData } from "../../../assets/ConstantData"
import { IoFilter } from "react-icons/io5"

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = projectsData.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <IoFilter className="absolute left-4 top-4 text-xl text-white" />
            <input
              type="text"
              placeholder="Filter Unternehmen"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-13 pr-4 py-3 rounded-full bg-[#1E1E1E] text-white placeholder-white border border-gray-700 focus:outline-none focus:border-white"
            />
          </div>
          <button className="px-6 py-3 bg-[#1E1E1E] text-white rounded-full font-medium hover:bg-[#424242] transition-colors whitespace-nowrap">
            Companies
          </button>
        </div>

        {/* Projects Container with Flex */}
        <div className="rounded-lg overflow-hidden bg-[#1E1E1E]">
          <div className="flex flex-wrap -mx-2">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="w-full sm:w-1/2 lg:w-1/4"
                >
                  <div className="aspect-square border-y border-l border-[#FFEEEE] flex flex-col items-center justify-center p-4 hover:bg-[#424242] transition-colors cursor-pointer group">
                    <img 
                      src={project.img} 
                      alt={project.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full h-64 flex items-center justify-center">
                <p className="text-gray-400 text-lg">No projects found</p>
              </div>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-4 text-right text-gray-600">
          <p className="text-sm">
            Showing {filteredProjects.length} of {projectsData.length} projects
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projects