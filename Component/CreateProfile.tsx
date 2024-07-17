
export default function CreateProfile() {
  return (
  <form className="">
    
          <div className="container mx-auto " style={{padding:"3rem"}}>
            <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="p-4">
                  
                <div className="col-span-full">
            <label htmlFor="photo" className="flex justify-center text-gray-900 font-bold text-2xl">User Profile</label>
            <div className="mt-2  gap-x-3 flex justify-center ">
              <div>
              <svg style={{height:"40vh"}} className=" text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                </svg>
             
              <button type="button" style={{marginLeft:"110px"}} className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
              </div>
            </div>
          </div>
                    <h1 className="text-xl font-bold mb-2">User Profile</h1>

                    {/* Full Name */}
                    <div className="mb-4">
                        <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" id="full_name" name="full_name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="John Doe" required />
                    </div>

                    {/* Email Address */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" id="email" name="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="john.doe@example.com" required />
                    </div>

                    {/* Contact Number */}
                    <div className="mb-4">
                        <label htmlFor="contact_number" className="block text-sm font-medium text-gray-700">Contact Number</label>
                        <input type="tel" id="contact_number" name="contact_number"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="123-456-7890" required />
                    </div>

                    {/* Gender */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Gender</label>
                        <div className="mt-1 ">
                            <label htmlFor="gender_male" className="inline-flex items-center mr-2">
                                <input type="radio" id="gender_male" name="gender"
                                    className="form-radio h-4 w-4 text-indigo-600" value="male" required />
                                <span className="ml-2 text-gray-700">Male</span>
                            </label>
                            <label htmlFor="gender_female" className="inline-flex items-center ml-6 mr-2">
                                <input type="radio" id="gender_female" name="gender"
                                    className="form-radio h-4 w-4 text-indigo-600" value="female" required />
                                <span className="ml-2 text-gray-700">Female</span>
                            </label>
                            <label htmlFor="gender_other" className="inline-flex items-center ml-6 mr-2">
                                <input type="radio" id="gender_other" name="gender"
                                    className="form-radio h-4 w-4 text-indigo-600" value="other" required />
                                <span className="ml-2 text-gray-700">Other</span>
                            </label>
                        </div>
                    </div>

                    {/* Date of Birth */}
                    <div className="mb-4">
                        <label htmlFor="date_of_birth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                        <input type="date" id="date_of_birth" name="date_of_birth"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required />
                    </div>

                    {/* Address */}
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                        <textarea id="address" name="address"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            rows={3} placeholder="123 Main St, City, Country" required />
                    </div>

                    {/* Education */}
                    <div className="mb-4">
                        <label htmlFor="education" className="block text-sm font-medium text-gray-700">Education</label>
                        <select id="education" name="education"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required>
                            <option value="">Select Education</option>
                            <option value="high_school">High School</option>
                            <option value="bachelors">Bachelor's Degree</option>
                            <option value="masters">Master's Degree</option>
                            <option value="phd">PhD</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Experience */}
                    <div className="mb-4">
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience (years)</label>
                        <input type="number" id="experience" name="experience"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="5" required />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6">
                        <button type="submit"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                            Save Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>

  </form>
  
  )
}
