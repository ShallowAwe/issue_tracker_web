import { useSelector } from "react-redux";

/**
 * Test component to verify userDetails Redux integration
 * Add this to any route temporarily to check if user details are being stored
 */
const UserDetailsTest = () => {
  const userDetails = useSelector((state) => state.userDetails);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Redux User Details Test
        </h2>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700">Status:</span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                userDetails.isLoaded
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {userDetails.isLoaded ? "✓ Loaded" : "⏳ Not Loaded"}
            </span>
          </div>

          <div className="border-t pt-3 mt-3">
            <h3 className="font-semibold text-gray-700 mb-2">User Data:</h3>
            <div className="bg-gray-50 rounded p-4 font-mono text-sm space-y-2">
              <div>
                <span className="text-gray-600">ID:</span>{" "}
                <span className="text-gray-900">{userDetails.id || "N/A"}</span>
              </div>
              <div>
                <span className="text-gray-600">Username:</span>{" "}
                <span className="text-gray-900">
                  {userDetails.username || "N/A"}
                </span>
              </div>
              <div>
                <span className="text-gray-600">Email:</span>{" "}
                <span className="text-gray-900">
                  {userDetails.email || "N/A"}
                </span>
              </div>
              <div>
                <span className="text-gray-600">First Name:</span>{" "}
                <span className="text-gray-900">
                  {userDetails.firstName || "N/A"}
                </span>
              </div>
              <div>
                <span className="text-gray-600">Last Name:</span>{" "}
                <span className="text-gray-900">
                  {userDetails.lastName || "N/A"}
                </span>
              </div>
              <div>
                <span className="text-gray-600">Active:</span>{" "}
                <span className="text-gray-900">
                  {userDetails.isActive ? "Yes" : "No"}
                </span>
              </div>
            </div>
          </div>

          <div className="border-t pt-3 mt-3">
            <h3 className="font-semibold text-gray-700 mb-2">Raw State:</h3>
            <pre className="bg-gray-900 text-green-400 rounded p-4 text-xs overflow-auto">
              {JSON.stringify(userDetails, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsTest;
