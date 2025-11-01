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
          swipe-based interface. All data is stored locally on your device, and no account creation is required.
        </p>

        <h2>1. Information We Collect</h2>

        <h3>1.1 Information Stored Locally on Your Device</h3>
        <p>Facto collects minimal information, all of which is stored locally on your iOS device:</p>
        <ul>
          <li><strong>Device-generated User ID:</strong> A unique identifier created locally on your device</li>
          <li><strong>Category Preferences:</strong> Which fact categories you have selected to view</li>
          <li><strong>Notification Settings:</strong> Your notification frequency preferences and quiet hours</li>
          <li><strong>App Settings:</strong> Auto-save preferences and other configuration options</li>
          <li><strong>Saved Facts:</strong> Facts you have saved to your collections</li>
          <li><strong>Viewed Facts:</strong> Tracking of which facts you have viewed to avoid repetition</li>
        </ul>

        <h3>1.2 Information We Do NOT Collect</h3>
        <p>Facto does not collect:</p>
        <ul>
          <li>Personal information (name, email, phone number)</li>
          <li>Location data</li>
          <li>Contacts</li>
          <li>Photos or media files</li>
          <li>Browsing history outside the app</li>
          <li>Device information beyond what's necessary for app functionality</li>
          <li>Advertising identifiers</li>
          <li>Payment information (subscriptions are handled by the App Store)</li>
        </ul>
        <p>
          <strong>No data is transmitted to external servers or cloud services.</strong> All your data stays on your device.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>All data is used locally on your device for the following purposes:</p>
        <ul>
          <li><strong>Personalization:</strong> Category preferences are used to filter and display relevant facts</li>
          <li><strong>Notification Delivery:</strong> Notification settings are used to schedule and deliver fact notifications at appropriate times</li>
          <li><strong>Collections Management:</strong> Saved facts are stored to allow you to revisit your favorite facts</li>
          <li><strong>Avoid Repetition:</strong> Viewed facts are tracked to prevent showing the same fact multiple times</li>
          <li><strong>App Functionality:</strong> To provide and improve the core features of the app</li>
        </ul>

        <h3>2.1 What We Do NOT Use Your Data For</h3>
        <p>Your data is NOT used for:</p>
        <ul>
          <li>Advertising or marketing to third parties</li>
          <li>Selling to data brokers</li>
          <li>Profiling for purposes unrelated to app functionality</li>
          <li>Tracking across other apps or websites</li>
          <li>Transmission to external servers or cloud services</li>
        </ul>

        <h2>3. Data Storage and Security</h2>

        <h3>3.1 Local Storage Only</h3>
        <p>All data is stored locally on your iOS device:</p>
        <ul>
          <li><strong>Technology:</strong> CoreData (Apple's local database framework)</li>
          <li><strong>Data Stored:</strong> Cached facts, saved facts, user preferences, viewed fact history</li>
          <li><strong>Retention:</strong> Cache is periodically cleared when the app enters background; saved facts persist until you delete them</li>
          <li><strong>Deletion:</strong> All local data is removed when you uninstall the app</li>
          <li><strong>No Cloud Storage:</strong> Your data is never transmitted to or stored on external servers</li>
        </ul>

        <h3>3.2 Security Measures</h3>
        <p>
          Since all data is stored locally on your device, it is protected by your device's built-in security features:
        </p>
        <ul>
          <li>iOS device encryption and security</li>
          <li>App sandbox protection (data is isolated from other apps)</li>
          <li>Regular security updates to our app</li>
        </ul>
        <p>
          Your data security is primarily managed by your iOS device's security features. We recommend keeping
          your device updated and using device passcode/biometric protection.
        </p>

        <h2>4. Data Sharing and Third-Party Services</h2>
        <p>
          <strong>We do not share, sell, or transmit your personal information to any third parties.</strong>
          All your data remains on your device.
        </p>

        <h3>4.1 No Third-Party Services</h3>
        <p>
          Facto does not currently integrate with any third-party services for data storage, analytics,
          or advertising. The app fetches facts from our servers, but does not send any personal information
          or usage data back.
        </p>

        <h3>4.2 Legal Requirements</h3>
        <p>
          Since we do not collect or store personal information on our servers, we have no data to disclose
          to third parties or legal authorities. All data is stored locally on your device.
        </p>

        <h2>5. Your Rights and Choices</h2>
        <p>You have full control over your data:</p>
        <ul>
          <li><strong>No Account Required:</strong> Use the app without creating an account or providing personal information</li>
          <li><strong>View and Edit Preferences:</strong> Change category selections, notification frequency, and quiet hours at any time in the app</li>
          <li><strong>Delete Saved Facts:</strong> Remove facts from your collections at any time</li>
          <li><strong>Disable Notifications:</strong> Turn off fact notifications in iOS settings or within the app</li>
          <li><strong>Complete Data Deletion:</strong> Uninstalling the app removes all locally stored data from your device</li>
        </ul>
        <p>
          Since all data is stored locally on your device, you have complete control over it. We do not
          store any of your data on our servers, so there is no need to request data deletion from us.
        </p>
        <p>
          If you have any questions, please contact us at{' '}
          <a href="mailto:contact@facto-app.com" style={{ color: 'var(--primary-color)' }}>contact@facto-app.com</a>.
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
          <a href="mailto:contact@facto-app.com" style={{ color: 'var(--primary-color)' }}>contact@facto-app.com</a>{' '}
          to have the information removed.
        </p>

        <h2>8. International Data Transfers</h2>
        <p>
          Since all data is stored locally on your device, there are no international data transfers.
          Your data never leaves your device.
        </p>

        <h2>9. Data Retention</h2>
        <ul>
          <li><strong>Local Storage:</strong> All data is stored locally on your device and deleted when you uninstall the app</li>
          <li><strong>Cached Facts:</strong> Automatically cleared when the app enters background to manage storage</li>
          <li><strong>Saved Facts:</strong> Persist on your device until you delete them or uninstall the app</li>
          <li><strong>Viewed Facts History:</strong> Retained locally to improve user experience by avoiding duplicate facts</li>
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
          <strong>Email:</strong> <a href="mailto:contact@facto-app.com" style={{ color: 'var(--primary-color)' }}>contact@facto-app.com</a><br />
          <strong>Support:</strong> <a href="mailto:contact@facto-app.com" style={{ color: 'var(--primary-color)' }}>contact@facto-app.com</a><br />
          <strong>Website:</strong> <a href="https://facto-app.com" style={{ color: 'var(--primary-color)' }}>https://facto-app.com</a>
        </p>

        <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: 'var(--bg-light)', borderRadius: '0.5rem' }}>
          <p style={{ margin: 0, color: 'var(--text-light)' }}>
            <strong>Summary:</strong> Facto is a privacy-focused app that stores all data locally on your device.
            We do not collect personal information, transmit data to external servers, sell your data,
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

