desc "Submit a new Beta Build to Crashlytics Beta"

lane :beta do |values|

# Adjust the `build_type` and `flavor` params as needed to build the right APK for your setup

emails = values[:test_email] ? values[:test_email] : ['guillaimejanssen@msn.com'] # You can list more emails here
groups = values[:test_email] ? nil : nil # You can define groups on the web and reference them here

gradle(
  task: "assembleRelease",
  # project_dir: "android/",
  properties: {
    'android.useDeprecatedNdk' => true,
    'android.injected.signing.store.file' => 'app/travis-ci-demo.keystore',
    'android.injected.signing.store.password' => ENV["TCD_RELEASE_STORE_PASSWORD"],
    'android.injected.signing.key.alias'=> ENV["TCD_RELEASE_KEY_ALIAS"],
    'android.injected.signing.key.password' => ENV["TCD_RELEASE_KEY_PASSWORD"]
  }
)

# supply(track: 'beta')
crashlytics(
  api_token: '[apiToken]',
  build_secret: '[build_secret]',
  emails: emails,
  groups: groups,
  debug: true,
  notes: 'Distributed with fastlane', # Check out the changelog_from_git_commits action
  notifications: true  # Should this distribution notify your testers via email?
)

end