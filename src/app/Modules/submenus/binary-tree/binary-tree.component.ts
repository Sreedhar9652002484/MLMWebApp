import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ReferralNode {
  id: string;
  fullName: string;
  profilePic: string;
  joinDate: Date;
  left?: ReferralNode;
  right?: ReferralNode;
}

@Component({
  selector: 'app-binary-tree',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './binary-tree.component.html',
  styleUrls: ['./binary-tree.component.scss']
})
export class BinaryTreeComponent implements OnInit {
  rootNode: ReferralNode = {
    id: 'USER001',
    fullName: 'John Doe',
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
    joinDate: new Date('2023-01-15')
  };

  level1: ReferralNode[] = [
    {
      id: 'USER002',
      fullName: 'Alice Smith',
      profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
      joinDate: new Date('2023-02-10')
    },
    {
      id: 'USER003',
      fullName: 'Bob Johnson',
      profilePic: 'https://randomuser.me/api/portraits/men/3.jpg',
      joinDate: new Date('2023-03-05')
    }
  ];

  level2: ReferralNode[] = [
    {
      id: 'USER004',
      fullName: 'Emma Brown',
      profilePic: 'https://randomuser.me/api/portraits/women/4.jpg',
      joinDate: new Date('2023-04-01')
    },
    {
      id: 'USER005',
      fullName: 'Liam Davis',
      profilePic: 'https://randomuser.me/api/portraits/men/5.jpg',
      joinDate: new Date('2023-04-15')
    },
    {
      id: 'USER006',
      fullName: 'Olivia Wilson',
      profilePic: 'https://randomuser.me/api/portraits/women/6.jpg',
      joinDate: new Date('2023-05-10')
    },
    {
      id: 'USER007',
      fullName: 'Noah Taylor',
      profilePic: 'https://randomuser.me/api/portraits/men/7.jpg',
      joinDate: new Date('2023-06-01')
    }
  ];

  highlightedNode: ReferralNode | null = null;

  ngOnInit(): void {
    // Simulate binary tree structure
    this.rootNode.left = this.level1[0];
    this.rootNode.right = this.level1[1];
    this.level1[0].left = this.level2[0];
    this.level1[0].right = this.level2[1];
    this.level1[1].left = this.level2[2];
    this.level1[1].right = this.level2[3];
  }

  highlightNode(node: ReferralNode): void {
    this.highlightedNode = node;
  }

  resetHighlight(): void {
    this.highlightedNode = null;
  }
}