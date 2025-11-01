function PrivacyPolicy() {
  return (
    <div className="container">
      <div className="legal-content">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: October 31, 2025</p>

        <p>
          At Facto, we are committed to protecting your privacy and ensuring
          the security of your personal information. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you use our iOS mobile application
          and our website at facto-app.com.
        </p>

        <p>
          <strong>Facto is a fact-discovery app</strong> that delivers curated facts through an engaging
          swipe-based interface. You can use Facto anonymously without creating an account, or optionally
          sign in with Apple or Google to sync your preferences and saved facts across devices.
        </p>

        <h2>1. Information We Collect</h2>

        <h3>1.1 Information Collected for Anonymous Users</h3>
        <p>If you use Facto without signing in, we collect minimal information stored locally on your device:</p>
        <ul>
          <li><strong>Device-generated User ID:</strong> A unique identifier created locally on your device</li>
          <li><strong>Category Preferences:</strong> Which fact categories you have selected to view</li>
          <li><strong>Notification Settings:</strong> Your notification frequency preferences and quiet hours</li>
          <li><strong>App Settings:</strong> Auto-save preferences and other configuration options</li>
          <li><strong>Saved Facts:</strong> Facts you have saved to your collections</li>
          <li><strong>Viewed Facts:</strong> Tracking of which facts you have viewed to avoid repetition</li>
        </ul>

        <h3>1.2 Additional Information for Authenticated Users</h3>
        <p>If you choose to sign in with Apple or Google, we additionally collect:</p>
        <ul>
          <li><strong>Display Name:</strong> Your name from your Apple or Google account</li>
          <li><strong>Email Address:</strong> Your email from your Apple or Google account</li>
          <li><strong>Authentication Provider:</strong> Which service you used to sign in (Apple or Google)</li>
          <li><strong>Account Creation Date:</strong> When you first created your profile</li>
          <li><strong>Last Updated Date:</strong> When your profile was last modified</li>
        </ul>

        <h3>1.3 Information We Do NOT Collect</h3>
        <p>Facto does not collect:</p>
        <ul>
          <li>Location data</li>
          <li>Contacts</li>
          <li>Photos or media files</li>
          <li>Browsing history outside the app</li>
          <li>Device information beyond what's necessary for app functionality</li>
          <li>Advertising identifiers</li>
          <li>Payment information (subscriptions are handled by the App Store)</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the collected information solely for the following purposes:</p>
        <ul>
          <li><strong>Personalization:</strong> Category preferences are used to filter and display relevant facts</li>
          <li><strong>Notification Delivery:</strong> Notification settings are used to schedule and deliver fact notifications at appropriate times</li>
          <li><strong>Collections Management:</strong> Saved facts are stored to allow you to revisit your favorite facts</li>
          <li><strong>Sync Across Devices:</strong> For authenticated users, data is synced via cloud storage to provide a consistent experience across devices</li>
          <li><strong>Avoid Repetition:</strong> Viewed facts are tracked to prevent showing the same fact multiple times</li>
          <li><strong>Account Management:</strong> Authentication data is used to identify users and manage their accounts</li>
          <li><strong>App Improvement:</strong> To maintain and improve our app functionality</li>
        </ul>

        <h3>2.1 What We Do NOT Use Your Data For</h3>
        <p>Your data is NOT used for:</p>
        <ul>
          <li>Advertising or marketing to third parties</li>
          <li>Selling to data brokers</li>
          <li>Profiling for purposes unrelated to app functionality</li>
          <li>Tracking across other apps or websites</li>
        </ul>

        <h2>3. Data Storage and Security</h2>

        <h3>3.1 Local Storage</h3>
        <p>For all users (anonymous and authenticated), we store data locally on your iOS device:</p>
        <ul>
          <li><strong>Technology:</strong> CoreData (Apple's local database framework)</li>
          <li><strong>Data Stored:</strong> Cached facts, saved facts, user preferences, viewed fact history</li>
          <li><strong>Retention:</strong> Cache is periodically cleared when the app enters background; saved facts persist until you delete them</li>
          <li><strong>Deletion:</strong> All local data is removed when you uninstall the app</li>
        </ul>

        <h3>3.2 Cloud Storage (Authenticated Users Only)</h3>
        <p>If you sign in with Apple or Google, your data is also stored in the cloud:</p>
        <ul>
          <li><strong>Technology:</strong> Firebase Firestore (Google Cloud Platform)</li>
          <li><strong>Data Stored:</strong> User profile, category preferences, notification settings, saved facts</li>
          <li><strong>Security:</strong> Data is transmitted over encrypted connections (HTTPS)</li>
          <li><strong>Retention:</strong> Data persists until you delete your account or request data deletion</li>
        </ul>

        <h3>3.3 Security Measures</h3>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information
          against unauthorized access, alteration, disclosure, or destruction. These measures include:
        </p>
        <ul>
          <li>Encryption of data in transit using HTTPS</li>
          <li>OAuth 2.0 authentication protocols for Sign in with Apple and Google Sign-In</li>
          <li>Secure cloud infrastructure provided by Firebase/Google Cloud Platform</li>
          <li>Regular security updates to our app and backend systems</li>
        </ul>
        <p>
          However, no method of transmission over the Internet or electronic storage is 100% secure.
          While we strive to protect your information, we cannot guarantee absolute security.
        </p>

        <h2>4. Third-Party Services and Data Sharing</h2>
        <p><strong>We do not sell your personal information.</strong> We only share data with the following third-party services necessary for app functionality:</p>

        <h3>4.1 Firebase (Google Cloud Platform)</h3>
        <p>
          For authenticated users only, we use Firebase Firestore to store and sync your data across devices.
        </p>
        <ul>
          <li><strong>Purpose:</strong> Backend database for storing user profiles, saved facts, and preferences</li>
          <li><strong>Data Shared:</strong> User profiles, saved facts, category preferences, notification settings</li>
          <li><strong>Privacy Policy:</strong> <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>https://firebase.google.com/support/privacy</a></li>
        </ul>

        <h3>4.2 Google Sign-In</h3>
        <p>
          If you choose to sign in with Google, we use Google's authentication service.
        </p>
        <ul>
          <li><strong>Purpose:</strong> Authentication service for users who choose to sign in with Google</li>
          <li><strong>Data Shared:</strong> Email, display name, authentication tokens</li>
          <li><strong>SDK Version:</strong> GoogleSignIn 7.0+</li>
          <li><strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>https://policies.google.com/privacy</a></li>
        </ul>

        <h3>4.3 Sign in with Apple</h3>
        <p>
          If you choose to sign in with Apple, we use Apple's authentication service.
        </p>
        <ul>
          <li><strong>Purpose:</strong> Authentication service for users who choose to sign in with Apple</li>
          <li><strong>Data Shared:</strong> Email (optional), display name, authentication tokens</li>
          <li><strong>Privacy Policy:</strong> <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>https://www.apple.com/legal/privacy/</a></li>
        </ul>

        <h3>4.4 Legal Requirements</h3>
        <p>We may disclose information if required by law or in response to valid legal requests, such as:</p>
        <ul>
          <li>Compliance with legal obligations</li>
          <li>Protection of our rights and property</li>
          <li>Prevention of fraud or security issues</li>
          <li>Protection of user safety</li>
        </ul>

        <h3>4.5 Business Transfers</h3>
        <p>
          In the event of a merger, acquisition, or sale of assets, your information may be transferred
          to the acquiring entity.
        </p>

        <h2>5. Your Rights and Choices</h2>
        <p>You have full control over your data and the following rights:</p>
        <ul>
          <li><strong>Use Anonymously:</strong> Use the app without creating an account</li>
          <li><strong>View and Edit Preferences:</strong> Change category selections, notification frequency, and quiet hours at any time in the app</li>
          <li><strong>Delete Saved Facts:</strong> Remove facts from your collections at any time</li>
          <li><strong>Disable Notifications:</strong> Turn off fact notifications in iOS settings or within the app</li>
          <li><strong>Sign Out:</strong> Disconnect your Apple or Google account at any time</li>
          <li><strong>Delete Account:</strong> For authenticated users, request account deletion which will remove your data from Firebase</li>
          <li><strong>Access Your Data:</strong> Request access to the personal information we hold about you</li>
          <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
        </ul>
        <p>
          <strong>Local Data Deletion:</strong> Uninstalling the app removes all locally stored data from your device.
        </p>
        <p>
          To exercise your rights or request account deletion, please contact us at{' '}
          <a href="mailto:privacy@facto-app.com" style={{ color: 'var(--primary-color)' }}>privacy@facto-app.com</a>.
        </p>

        <h2>6. iOS Permissions</h2>
        <p>Facto requests the following iOS permissions:</p>
        <ul>
          <li><strong>Notifications:</strong> To deliver scheduled fact notifications to your device. You can grant or deny this permission, and app functionality is not dependent on it.</li>
          <li><strong>Network Access:</strong> To fetch facts and sync data (standard for all apps).</li>
        </ul>
        <p>Facto does NOT request access to:</p>
        <ul>
          <li>Camera</li>
          <li>Microphone</li>
          <li>Location</li>
          <li>Contacts</li>
          <li>Photo Library</li>
        </ul>

        <h2>7. Children's Privacy</h2>
        <p>
          Our services are not intended for children under the age of 13. We do not knowingly collect
          personal information from children under 13. If a parent or guardian becomes aware that their
          child has provided personal information without consent, please contact us at{' '}
          <a href="mailto:privacy@facto-app.com" style={{ color: 'var(--primary-color)' }}>privacy@facto-app.com</a>{' '}
          to have the information removed.
        </p>

        <h2>8. International Data Transfers</h2>
        <p>
          For authenticated users, data may be stored on Google Cloud Platform servers (via Firebase),
          which may be located in various countries. Data is protected in accordance with Firebase's
          security standards and applicable data protection laws.
        </p>

        <h2>9. Data Retention</h2>
        <ul>
          <li><strong>Anonymous Users:</strong> Data is stored locally on your device and deleted when you uninstall the app</li>
          <li><strong>Authenticated Users:</strong> Data is retained in Firebase until you delete your account or request data deletion</li>
          <li><strong>Cached Facts:</strong> Automatically cleared when the app enters background to manage storage</li>
          <li><strong>Viewed Facts History:</strong> Retained to improve user experience by avoiding duplicate facts</li>
        </ul>

        <h2>10. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any material changes
          by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued
          use of our services after such changes constitutes acceptance of the updated policy.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices,
          please contact us at:
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:privacy@facto-app.com" style={{ color: 'var(--primary-color)' }}>privacy@facto-app.com</a><br />
          <strong>Support:</strong> <a href="mailto:contact@facto-app.com" style={{ color: 'var(--primary-color)' }}>contact@facto-app.com</a><br />
          <strong>Website:</strong> <a href="https://facto-app.com" style={{ color: 'var(--primary-color)' }}>https://facto-app.com</a>
        </p>

        <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: 'var(--bg-light)', borderRadius: '0.5rem' }}>
          <p style={{ margin: 0, color: 'var(--text-light)' }}>
            <strong>Summary:</strong> Facto collects minimal data focused on app functionality.
            You can use the app anonymously or sign in to sync across devices. We do not sell your data,
            use it for advertising, or track you across other apps. This privacy policy is designed to
            comply with GDPR, CCPA, and iOS App Store requirements. Please consult with a legal professional
            to ensure it meets all applicable requirements for your specific jurisdiction and use case.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy

