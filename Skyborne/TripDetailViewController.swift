//
//  TripDetailViewController.swift
//  Skyborne
//
//  Created by Dominic Philip on 5/7/17.
//  Copyright © 2017 Skyborne Inc. All rights reserved.
//

import UIKit

class TripDetailViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        navigationItem.rightBarButtonItem = UIBarButtonItem(barButtonSystemItem: .action, target: self, action: #selector(actionActivity))
    }
    
    // MARK: Navigation Bar Actions
    
    func actionActivity() -> Void {
        // TODO: Implement Action Feature (Such As Sharing Trip) & Add Available Social Media Apps To The Menu
        
        if let title = self.navigationItem.title {
            let shareItem = "My trip to \(String(describing: title)) managed by Skyborne!"
            let activityViewController = UIActivityViewController(activityItems: [shareItem], applicationActivities: nil)
            
            present(activityViewController, animated: true, completion: nil)
        }
    }

}
